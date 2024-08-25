import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../Firebase"; // Ensure this is the correct path to your Firebase config

function Shop() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      // Query to fetch only selected products
      const q = query(collection(db, "products"), where("isFeatured", "==", true));
      const productSnapshot = await getDocs(q);
      const productList = await Promise.all(
        productSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = data.Image;
          if (imageUrl && imageUrl.startsWith("gs://")) {
            const storage = getStorage();
            const imageRef = ref(storage, imageUrl);
            try {
              imageUrl = await getDownloadURL(imageRef);
            } catch (error) {
              console.error("Error getting download URL: ", error);
              imageUrl = "/path/to/fallback-image.jpg"; // Use a fallback image
            }
          }
          return {
            id: doc.id,
            ...data,
            Image: imageUrl,
          };
        })
      );
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Filter products based on the search term and price range
  const filteredProducts = products.filter((product) => {
    const productName = product.Name || ""; // Ensure productName is a string
    const matchesSearchTerm = searchTerm === "" || productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriceRange = product.Price >= minPrice && product.Price <= maxPrice;
    
    return matchesSearchTerm && matchesPriceRange;
  });

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
                          src={product.Image}
                          className="img-fluid product-thumbnail"
                          alt={product.Name}
                        />
                        <h3 className="product-title">{product.Name}</h3>
                        <strong className="product-price">GH₵ {product.Price}</strong>
                        <span
                          className="icon-cross"
                          onClick={() => handleAddToCart(product)}
                        >
                          <img
                            src="../assets/images/cross.svg"
                            className="img-fluid"
                            alt="Close Icon"
                          />
                        </span>
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
