import React, { useState } from 'react'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import './styles.css'

const App = () => {
  const [products, setproducts] = useState([]);

  const addProduct = (newProduct) => {
    setproducts([...products, newProduct]);
  };

  return (
    <div className="container">
      <h1>Product Management App</h1>
      <AddProduct addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App
