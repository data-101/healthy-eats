import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calendar, people } from "ionicons/icons";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../store/ProductStore";

interface Item {
  id: string;
  info: string;
}

// This page is supposed to allow users to maintain different lists
// Work in progress
const ItemList: React.FC = () => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [text, setText] = useState<string>();

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={addItem}>
          <IonInput
            value={text}
            placeholder="Enter Item"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
          <IonButton expand="block" type="submit">
            Add
          </IonButton>
        </form>
        {itemList.map((data) => (
          <p>{data.info}</p>
        ))}
      </IonContent>

      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/home">
          <IonIcon icon={calendar} />
          <IonLabel>Store</IonLabel>
        </IonTabButton>
        <IonTabButton tab="list" href="/list">
          <IonIcon icon={people} />
          <IonLabel>List</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default ItemList;
