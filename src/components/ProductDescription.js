import "./ProductDescription.scss";
import React from "react";
import BuyButton from "./BuyButton";

const ProductDescription = ({ productDetails, description }) => {
  return (
    <div className="product--description__container">
      <div className="container--description">
        <img
          src={productDetails.pictures[0].url || productDetails.thumbnail}
        ></img>
        <div>
          <h3>Descripción</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="container--info">
        <p className="condition--tag">
          {productDetails.condition === "new" ? "Nuevo" : "Usado"} |{" "}
          {productDetails.sold_quantity} vendidos
        </p>
        <h2>{productDetails.title}</h2>
        <p className="price--tag">${productDetails.base_price}</p>
        <BuyButton href={productDetails.permalink} />
      </div>
    </div>
  );
};

export default ProductDescription;
