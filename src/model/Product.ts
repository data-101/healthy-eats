import { Nutrients } from "./FoodAPI";

export interface Product {
    id: string,
    name: string,
    rating: number,
    description: string,
    image?: string,
    alert?: boolean,
    nutrients?: Nutrients,
    healthScore?: number,
    envScore?: number,
    alternative?: Alt[],
    altIng?: Alt[],
    dishes?: Alt[]
}

export interface Alt {
    name: string,
    link: string
}