import React from 'react'


function shop() {
  return (
    <div><nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
    <div className="container">
      <a className="navbar-brand" href="/home">Possible Decor<span>.</span></a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact us</a>
          </li>
        </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a className="nav-link" href="#"><img src="../assets/images/user.svg" alt="User" /></a>
          </li>
          <li>
            <a className="nav-link" href="/cart"><img src="../assets/images/cart.svg" alt="Cart" /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
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
              <li><a href="/Flowers">Decor Flowers</a></li>
              <li><a href="/Tiles">PVC Tiles & Wall Panels</a></li>
              <li><a href="/flutedPanels">Fluted Panels</a></li>
              <li><a href="/Sheets">Marble Sheets</a></li>
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
               
              />
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
            {/* Main content, like products listing, here */}
            <div className="untree_co-section product-section before-footer-section">
              <div className="product-container">
                <div className="row">
                  {/* Start Column 1 */}
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <a className="product-item" href="#">
                      <img
                        src="../assets/images/Product/Artefacts/1.jpg"
                        className="img-fluid product-thumbnail"
                        alt="Astronut Artefact"
                      />
                      <h3 className="product-title">Astronut Artefact</h3>
                      <strong className="product-price">GH₵ 100.00</strong>
                      <span className="icon-cross">
                        <img
                          src="../assets/images/cross.svg"
                          className="img-fluid"
                          alt="cross icon"
                        />
                      </span>
                    </a>
                  </div>
                  {/* End Column 1 */}
                  {/* Start Column 2 */}
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <a className="product-item" href="#">
                      <img
                        src="../assets/images/Product/Artefacts/2.jpg"
                        className="img-fluid product-thumbnail"
                        alt="Golden Artefact"
                      />
                      <h3 className="product-title">Golden Artefact</h3>
                      <strong className="product-price">GH₵ 150.00</strong>
                      <span className="icon-cross">
                        <img
                          src="../assets/images/cross.svg"
                          className="img-fluid"
                          alt="cross icon"
                        />
                      </span>
                    </a>
                  </div>
                  {/* End Column 2 */}
                  {/* Start Column 3 */}
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <a className="product-item" href="#">
                      <img
                        src="../assets/images/Product/Artefacts/3.jpg"
                        className="img-fluid product-thumbnail"
                        alt="Silver Artefact"
                      />
                      <h3 className="product-title">Silver Artefact</h3>
                      <strong className="product-price">GH₵ 120.00</strong>
                      <span className="icon-cross">
                        <img
                          src="../assets/images/cross.svg"
                          className="img-fluid"
                          alt="cross icon"
                        />
                      </span>
                    </a>
                  </div>
                  {/* End Column 3 */}
                  {/* Start Column 4 */}
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <a className="product-item" href="#">
                      <img
                        src="../assets/images/Product/Artefacts/4.jpg"
                        className="img-fluid product-thumbnail"
                        alt="Wooden Artefact"
                      />
                      <h3 className="product-title">Wooden Artefact</h3>
                      <strong className="product-price">GH₵ 130.00</strong>
                      <span className="icon-cross">
                        <img
                          src="../assets/images/cross.svg"
                          className="img-fluid"
                          alt="cross icon"
                        />
                      </span>
                    </a>
                  </div>
                  {/* End Column 4 */}
                  {/* Add more products as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </div>
  )
}

export default shop