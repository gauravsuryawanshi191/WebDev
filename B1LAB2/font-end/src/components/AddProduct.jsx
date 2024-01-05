import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [productIdCounter, setProductIdCounter] = useState(1);

  const [product, setProduct] = useState({
    productId: '',
    productName: '',
    price: 0,
    expiryDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    const newProduct = { ...product, productId: productIdCounter.toString() };
    addProduct(newProduct);

    // Increment the product ID counter for the next product
    setProductIdCounter(productIdCounter + 1);

    setProduct({
      productId: '',
      productName: '',
      price: 0,
      expiryDate: '',
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        {/* The Product Id input is now disabled and auto-populated */}
        <label>Product Id:</label>
        <input type="text" name="productId" value={productIdCounter} disabled />

        <label>Product Name:</label>
        <input type="text" name="productName" value={product.productName} onChange={handleInputChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleInputChange} required />

        <label>Expiry Date:</label>
        <input type="date" name="expiryDate" value={product.expiryDate} onChange={handleInputChange} required />

        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
