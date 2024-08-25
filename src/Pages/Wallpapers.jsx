import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useCart } from "../Context/CartContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../Firebase"; // Ensure this is the correct path to your Firebase config

function Wallpapers() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const q = query(collection(db, "products"), where("Category", "==", "Wallpaper"));
      const productSnapshot = await getDocs(q);
      const productList = await Promise.all(productSnapshot.docs.map(async (doc) => {
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
          Image: imageUrl
        };
      }));
      console.log("Fetched Wallpapers:", productList);
      setProducts(productList);
    };

    fetchWallpapers();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Wallpapers</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="shop">
        <Sidebar />

        <div className="main-content">
          <div className="products-display">
            <div className="untree_co-section product-section before-footer-section">
              <div className="product-container">
                <div className="row">
                  {products.map((product) => (
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

export default Wallpapers;
