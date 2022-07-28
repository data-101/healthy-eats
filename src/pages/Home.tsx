import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { calendar, people, informationCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ProductList } from '../components/ProductList';
import { Product } from '../model/Product';
import { getProducts } from '../store/ProductStore';
import './Home.css';


const Home: React.FC = () => {
  // Manages state of the main search bar
  const [searchText, setSearchText] = useState('');
  // Grocery lIst
  const [producList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    // Get all the products and store it in the product list state that is used to render the grocery list
    getProducts(searchText).then(products => setProductList(products));
  }, []);

  const filter = (event : React.FormEvent) => {
    event.preventDefault();
    // This would try and find the product and merge it to the product list
    getProducts(searchText).then(products => setProductList([...producList,...products]))
    setSearchText("");
  };


  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Healthy Eats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div >
          <form onSubmit={filter}>
        <IonSearchbar inputmode="search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonButton expand="block" type="submit">Add</IonButton>
        </form>
        </div>
        < ProductList products={producList} />
      </IonContent >
    </IonPage >



  );
};

export default Home;
