import React from 'react'

function Wallclocks() {
  return (
    <div>
      
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
  <div className="container">
    <a className="navbar-brand" href="/home">Possible Decor<span>.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
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
          <a className="nav-link" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact us</a>
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
{/* End Header/Navigation */}

{/* Start Hero Section */}
<div className="hero">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="intro-excerpt">
          <h1>Wallclocks</h1>
        </div>
      </div>
      <div className="col-lg-7">
        {/* Additional content can be added here */}
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
            {/* Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/1.jpg" className="img-fluid product-thumbnail" alt="Wallclock" />
                <h3 className="product-title">Wallclock</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/2.jpg" className="img-fluid product-thumbnail" alt="Wallclock" />
                <h3 className="product-title">Wallclock</h3>
                <strong className="product-price">GH₵ 220.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <div className="product-img"><img src="../assets/images/Product/Wall Clock/3D Wall Clock Acrylic - Black.jpeg" className="img-fluid product-thumbnail" alt="3D Wall Clock Acrylic - Black" /></div>
                <h3 className="product-title">3D Wall Clock Acrylic - Black</h3>
                <strong className="product-price">GH₵ 230.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-7">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/3D Wall Clock.jpeg" className="img-fluid product-thumbnail" alt="3D Wall Clock" />
                <h3 className="product-title">3D Wall Clock</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}

            {/* Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/Fashion Chic Clothes Online,.jpeg" className="img-fluid product-thumbnail" alt="Fashion Chic Clothes Online" />
                <h3 className="product-title">3D Wall Clock</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/Home Office Decor Clock for Office, Home, Bathroom,.jpeg" className="img-fluid product-thumbnail" alt="Home Office Decor Clock" />
                <h3 className="product-title">3D Wall Clock</h3>
                <strong className="product-price">GH₵ 220.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/Modern Wall Clock Decoration For Your Home Get Ideas & Decorate Wall.jpeg" className="img-fluid product-thumbnail" alt="Modern Wall Clock Decoration" />
                <h3 className="product-title">Modern Wall Clock Decoration</h3>
                <strong className="product-price">GH₵ 220.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Wall Clock/Modern Wall Clock Decoration.jpeg" className="img-fluid product-thumbnail" alt="Modern Wall Clock Decoration" />
                <h3 className="product-title">3D Wall Clock</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Wallclocks