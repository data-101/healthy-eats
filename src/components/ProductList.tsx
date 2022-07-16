import React from "react";
import {
  IonList,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonRouterLink,
} from "@ionic/react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { Product } from "../model/Product";

interface ProductProps {
  products: Product[];
}

export const ProductList: React.FC<ProductProps> = ({ products }) => {
  const itemList = () => {
    return products.map((product) => (
      <IonItem>
        <IonCheckbox slot="end" />
        <IonIcon icon={product.image} slot="start" />
        <IonLabel>{product.name}</IonLabel>
      </IonItem>
    ));
  };

  return (
    <IonContent>
      {products.map((product) => (
        // <IonCol size="12" size-md="6" key={product.id}>
        <IonCard key={product.id}>
          <IonItem>
            <IonItem slot="start" style={{backgroundColor:"blue"}} routerLink={`/product/${product.id}`}>
              <IonAvatar>
                <img src={product.image} alt="Speaker profile pic" />
              </IonAvatar>
            </IonItem>

            <IonLabel slot="">
              <h2>{product.name}</h2>
            </IonLabel>
            <IonCheckbox slot="end" />
          </IonItem>
        </IonCard>
      ))}
    </IonContent>
  );
};
