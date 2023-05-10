import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function AdminProduct() {
  const [products, setProducts] = useState(useLoaderData());
  const [editProduct, setEditProduct] = useState({});

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedProduct = {
      id: editProduct.id,
      name: event.target.title.value,
      picture: event.target.url.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
	 
    setProducts(updatedProducts);
    setEditProduct({});
  };

  const handleCancel = () => {
    setEditProduct({});
  };

  const handleDelete = (product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
  };

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          {editProduct.id === product.id ? (
            <form onSubmit={handleSave}>
              <input name="title" defaultValue={product.title} />
              <input name="url" defaultValue={product.picture} />
              <input name="description" defaultValue={product.description} />
              <input name="price" defaultValue={product.price} />
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h3 className="title">{product.name}</h3>
              <img
                className="products-pic"
                src={product.picture}
                alt="product image"
              />
              <p>{product.description}</p>
              <p className="product-price">{product.price} kr</p>
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button onClick={() => handleDelete(product)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminProduct;
