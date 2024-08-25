import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../firestore'; // Adjust the path as needed

function ProductList({ addToCart }) {
  const [shoppingProducts, setShoppingProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setShoppingProducts(products);
    };

    loadProducts();
  }, []);

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {shoppingProducts.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            {item.name} - Ghc{item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
