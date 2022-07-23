import { EdamanObject } from "../model/FoodAPI";
import { Product } from "../model/Product";

const key = require("../secret.json");

const products: Product[] = [
  {
    name: "Apple",
    rating: 2,
    description: "Hello",
    id: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
    alert: false,
    image:
      "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
  },
  {
    name: "Orange",
    rating: 2,
    description: "Hello",
    id: "food_b0bnl8oayiqhs2at63ifxbm6i3o3",
    image:
      "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
  },
];

const productInfo: any = {
  food_bknby1la98smrsbwnthinbam42nj: {
    health: 4.0,
    env: 3.5,
    alternatives: [
      { name: "Kung Pao Tofu", link: "https://tofubud.com/blogs/dinner-recipes/kung-pao-tofu" },
      { name: "Vegan spaghetti", link: "https://veganheaven.org/recipe/vegan-spaghetti/" },
      { name: "Impossible Burger", link: "https://impossiblefoods.com/recipes-burgers" },
    ],
    altIng: [
        { name: "Tofu", link: "/product/food_a269ixea1yf51xbfwgnq2boiwc7x" },
        { name: "Beyond Meat", link: "" },
        { name: "Vegetarian Chicken", link: "" },
      ]
  },
  food_a269ixea1yf51xbfwgnq2boiwc7x:{
    health: 10.0,
    env: 9.5,
    dishes: [
      { name: "Kung Pao Tofu", link: "https://tofubud.com/blogs/dinner-recipes/kung-pao-tofu" },
      { name: "Tofu Curry", link: "https://www.food.com/recipe/tofu-curry-246623" },
    ],
  }
  
};

export const getProducts = async (
  searchText: string = ""
): Promise<Product[]> => {
  console.log(searchText);
  if (searchText === "") {
    return [];
  }

  let pd = await fetch(
    `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchText}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": key.key,
      },
    }
  )
    .then((res) => res.json() as Promise<EdamanObject>)
    .then((response) => {
      console.log(response);
      // let product: Product = { "name": response.data.parsed, "rating": 2, "description": "Hello", "id": "a" };
      if (response.parsed.length == 0) {
        return [
          {
            name: searchText,
            rating: 2,
            description: "Hello",
            id: searchText,
            image: "bag-outline",
          },
        ];
      }
      return response.parsed.map(
        (prod) =>
          <Product>{
            name: prod.food.label,
            rating: 2,
            description: "test",
            id: prod.food.foodId,
            image: prod.food.image,
            alert: prod.food.label == "Beef" ? true : false,
          }
      );
    })
    .catch((err) => {
      console.error(err);
      return [
        {
          name: searchText,
          rating: 2,
          description: "Hello",
          id: searchText,
          image: "wifi",
        },
      ];
    });
  // products.concat(pd);
  return pd;
  // return products.filter((product) => {
  //     return product.name.toLowerCase().startsWith(searchText.toLowerCase());
  // });
};

export const getProductById = async (id: string): Promise<Product> => {
  return await fetch(
    `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": key.key,
      },
    }
  )
    .then((res) => res.json() as Promise<EdamanObject>)
    .then((response) => {
      console.log(response);
      return response.hints[0].food;
    })
    .then((food) => {
      let el : Product= {
        name: food.label,
        rating: 2,
        description: "test",
        id: food.foodId,
        image: food.image,
        nutrients: food.nutrients,
      };
      if(productInfo[food.foodId]){
        el.healthScore = productInfo[food.foodId].health;
        el.envScore = productInfo[food.foodId].env
        el.alternative = productInfo[food.foodId].alternatives
        el.altIng = productInfo[food.foodId].altIng
        el.dishes = productInfo[food.foodId].dishes
      }
      return el
    });
};
