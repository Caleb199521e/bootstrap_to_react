import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Ensure this is the correct path to your CartContext

function Shop() {
  const { addToCart, getCartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const products = [
    {
      id: 1,
      name: "Astronut Artefact",
      price: 100.00,
      imgSrc: "/assets/images/Product/Artefacts/1.jpg"
    },
    {
      id: 2,
      name: "Golden Artefact",
      price: 150.00,
      imgSrc: "/assets/images/Product/Artefacts/2.jpg"
    },
    {
      id: 3,
      name: "Silver Artefact",
      price: 120.00,
      imgSrc: "/assets/images/Product/Artefacts/3.jpg"
    },
    {
      id: 4,
      name: "Wooden Artefact",
      price: 130.00,
      imgSrc: "/assets/images/Product/Artefacts/4.jpg"
    }
  ];

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="shop">
        <div className="container">
          <div className="sidebar">
            <h2>Categories</h2>
            <ul className="category-list">
              <li><a href="/wallpapers">Wallpapers</a></li>
              <li><a href="/flowers">Decor Flowers</a></li>
              <li><a href="/tiles">PVC Tiles & Wall Panels</a></li>
              <li><a href="/flutedPanels">Fluted Panels</a></li>
              <li><a href="/sheets">Marble Sheets</a></li>
              <li><a href="/vases">Vases</a></li>
              <li><a href="/wallclocks">Wall Clocks</a></li>
              <li><a href="/decorAccessories">Decor Accessories</a></li>
              <li><a href="/shelves">Shelves</a></li>
              {/* Add more categories as needed */}
            </ul>
            <div className="search-bar">
              <input
                type="text"
                id="product-search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="price-filter">
              <h3>Filter by Price</h3>
              <label htmlFor="min-price">Min Price:</label>
              <input
                type="number"
                id="min-price"
                name="min-price"
                min="0"
                placeholder="0"
              />
              <label htmlFor="max-price">Max Price:</label>
              <input
                type="number"
                id="max-price"
                name="max-price"
                min="0"
                placeholder="10000"
              />
              <button>Apply</button>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="products-display">
            {/* Main content, like products listing, here */}
            <div className="untree_co-section product-section before-footer-section">
              <div className="product-container">
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                      <div className="product-item">
                        <img
                          src={product.imgSrc}
                          className="img-fluid product-thumbnail"
                          alt={product.name}
                        />
                        <h3 className="product-title">{product.name}</h3>
                        <strong className="product-price">GH₵ {product.price.toFixed(2)}</strong>
                        <button 
                          className="btn-add-to-cart" 
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
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

export default Shop;
