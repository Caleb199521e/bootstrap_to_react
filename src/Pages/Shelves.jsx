import React from 'react';
import { useCart } from '../Context/CartContext'; // Import the useCart hook

function Shelves() {
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  // Sample products array, replace this with your actual products or fetch them from Firestore
  const products = [
    { id: 1, name: 'Black and Orange Shelves', price: 250.00, image: '../assets/images/Product/Shelves/1.jpg' },
    { id: 2, name: 'Colourful Shelves', price: 200.00, image: '../assets/images/Product/Shelves/10.jpg' },
    { id: 3, name: 'Grey Shelves', price: 200.00, image: '../assets/images/Product/Shelves/11.jpg' },
    { id: 4, name: 'Red and White Shelves', price: 200.00, image: '../assets/images/Product/Shelves/12.jpg' },
    { id: 5, name: 'Oval Black and Purple Shelves', price: 200.00, image: '../assets/images/Product/Shelves/13.jpg' },
    { id: 6, name: 'White and Black Shelves', price: 220.00, image: '../assets/images/Product/Shelves/14.jpg' },
    { id: 7, name: 'Three Colored Shelves', price: 200.00, image: '../assets/images/Product/Shelves/15.jpg' },
    { id: 8, name: 'Red and White Shelves', price: 250.00, image: '../assets/images/Product/Shelves/19.jpg' },
  ];

  return (
    <div>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shelves</h1>
              </div>
            </div>
            <div className="col-lg-7">
              {/* Hero content here */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="shop">
        <div className="container">
          <div className="sidebar">
            <h2>Categories</h2>
            <ul className="category-list">
              <li><a href="wallpaper.html">Wallpapers</a></li>
              <li><a href="Decor Flowers.html">Decor Flowers</a></li>
              <li><a href="Pvc Tiles.html">PVC Tiles & Wall Panels</a></li>
              <li><a href="Fluted Panels.html">Fluted Panels</a></li>
              <li><a href="Marble Sheets.html">Marble Sheets</a></li>
              <li><a href="Vases.html">Vases</a></li>
              <li><a href="Wallclocks.html">Wall Clocks</a></li>
              <li><a href="Decor Accessories.html">Decor Accessories</a></li>
              <li><a href="Shelves.html">Shelves</a></li>
              {/* Add more categories as needed */}
            </ul>
            <div className="search-bar">
              <input type="text" id="product-search" placeholder="Search products..." />
            </div>
            <div className="price-filter">
              <h3>Filter by Price</h3>
              <label htmlFor="min-price">Min Price:</label>
              <input type="number" id="min-price" name="min-price" min="0" placeholder="0" />
              <label htmlFor="max-price">Max Price:</label>
              <input type="number" id="max-price" name="max-price" min="0" placeholder="10000" />
              <button>Apply</button>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="products-display">
            <div className="untree_co-section product-section before-footer-section">
              <div className="product-container">
                <div className="row">
                  {products.map((product) => (
                    <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                      <div className="product-item">
                        <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                        <h3 className="product-title">{product.name}</h3>
                        <strong className="product-price">GH₵ {product.price.toFixed(2)}</strong>
                        <span className="icon-cross">
                          <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                        </span>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shelves;
