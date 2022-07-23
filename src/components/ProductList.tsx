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

  return (
    <IonContent>
      {products.map((product) => (
        // <IonCol size="12" size-md="6" key={product.id}>
        <IonCard key={product.id} style={product.alert ? {borderLeft: "solid 0.6em red"}: {}}>
          <IonItem >
            <IonItem slot="start" routerLink={`/product/${product.id}`}>
              <IonAvatar >
                <img src={product.image} alt="No Image" />
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
