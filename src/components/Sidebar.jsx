import React, { useState, useEffect } from "react";

function Sidebar() {
    const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  return (
    
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
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <label htmlFor="max-price">Max Price:</label>
        <input
          type="number"
          id="max-price"
          name="max-price"
          min="0"
          placeholder="10000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <button onClick={() => setSearchTerm(searchTerm)}>Apply</button>
      </div>
    </div>
  </div>
  )
}

export default Sidebar