import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

import "./ProductPage.scss";

import { ActionSheetButton } from "@ionic/core";
import {
  IonActionSheet,
  IonChip,
  IonIcon,
  IonHeader,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonBackButton,
  IonPage,
  IonCard,
  IonCardHeader,
  IonSlide,
  IonSlides,
  IonTitle,
  IonText,
  IonItem,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";

import { Product } from "../model/Product";
import { getProductById } from "../store/ProductStore";
import { O_RDONLY } from "constants";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface OwnProps extends RouteComponentProps {
  id?: string;
}

interface StateProps {}

interface DispatchProps {}

interface productDetailProps extends OwnProps, StateProps, DispatchProps {}

interface ProductPageProp
  extends RouteComponentProps<{
    id: string;
  }> {}

const ProductPage: React.FC<ProductPageProp> = ({ match }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState("");

  const [product, setProduct] = useState<Product>({
    id: "1",
    name: "",
    description: "",
    rating: 0,
    image: "wifi",
  });

  useEffect(() => {
    getProductById(match.params.id).then((pd) => {
      console.log(pd);
      setProduct(pd);
    });
  }, []);

  function openExternalUrl(url: string) {
    window.open(url, "_blank");
  }

  if (!match) {
    return <div>product not found</div>;
  }

  return (
    <IonPage id="product-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="product-background">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
        </div>

        {product.healthScore ? (
          <IonCard
            style={{
              backgroundColor:
                product.healthScore < 5 ? "#f7b9b9" : "rgb(186 247 185)",
            }}
          >
            <IonCardHeader style={{ color: "black" }}>
              Health Score : {product.healthScore}
            </IonCardHeader>
          </IonCard>
        ) : (
          <IonCard>
            <IonCardHeader style={{ color: "black" }}>
              Health Score : Information Not Available
            </IonCardHeader>
          </IonCard>
        )}

        {product.envScore ? (
          <IonCard
            style={{
              backgroundColor:
                product.envScore < 5 ? "#f7b9b9" : "rgb(186 247 185)",
            }}
          >
            <IonCardHeader style={{ color: "black" }}>
              Environment Score : {product.envScore}
            </IonCardHeader>
          </IonCard>
        ) : (
          <IonCard>
            <IonCardHeader style={{ color: "black" }}>
              Environment Score : Information Not Available
            </IonCardHeader>
          </IonCard>
        )}

        {product.alternative && (
          <div>
            <IonTitle>Alternatives:</IonTitle>
            <IonSlides pager={true} options={slideOpts}>
              {product.alternative.map((prd) => (
                <IonSlide key={prd.name}>
                  <IonCard style={{ width: "inherit" }} href={prd.link}>
                    <IonCardHeader>{prd.name}</IonCardHeader>
                  </IonCard>
                </IonSlide>
              ))}
            </IonSlides>
          </div>
        )}

        {product.altIng && (
          <div>
            <IonTitle>Alternative Ingredients:</IonTitle>
            <IonCard>
              {product.altIng.map((prd) => (
                <IonItem href="#" key={prd.name}>
                  <IonLabel>{prd.name}</IonLabel>
                </IonItem>
              ))}
            </IonCard>
          </div>
        )}

        {product.dishes && (
          <div>
            <IonTitle>Dishes To Try:</IonTitle>
            <IonCard>
              {product.dishes.map((prd) => (
                <IonItem href={prd.link} key={prd.name}>
                  <IonLabel>{prd.name}</IonLabel>
                </IonItem>
              ))}
            </IonCard>
          </div>
        )}

        <IonTitle>Nutrition</IonTitle>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    Carbohydrate: {product.nutrients?.CHOCDF} mg
                  </IonLabel>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem href="#">
                  <IonLabel>Cholesterol: {product.nutrients?.FAT} g</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    Energy: {product.nutrients?.ENERC_KCAL} kcal
                  </IonLabel>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem href="#">
                  <IonLabel>Fiber: {product.nutrients?.FIBTG} mg</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default ProductPage;
