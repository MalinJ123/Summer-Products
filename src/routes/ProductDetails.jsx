import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

function ProductDetails(props) {
//   const { id } = useParams();
const product = props.product

  function handleAddToCart() {
	props.onAddToCart(product.name, product.picture, product.price);
 }
  if (!product) {
    return (
      <section>
        <h2>No Product</h2>
        <p>Please check the URL again</p>
        <p>
          <Link to="/products">Tillbaka</Link>
        </p>
      </section>
    );
  }

  return (
    <>
      <p className="button-container">
        <button className="detail-button">
          <Link className="link-btn" to="/products">
            Tillbaka
          </Link>
        </button>
      </p>
      <section className="product-container">
        <div className="wrapper">
          <h2 className="detail-title">{product.name}</h2>
          <img
            className="detail-pic"
            src={product.picture}
            alt="bild på produkt"
          />
          <div className="p-price-container">
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">{product.price} Kr</p>
          </div>
          <button className="detail-button" onClick={handleAddToCart}>
            Lägg till
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;