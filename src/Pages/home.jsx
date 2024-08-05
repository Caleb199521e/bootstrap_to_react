import React from 'react';

function Home() {
  return (
    <div>
     {/* Navigation Bar 
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="/home">
          Possible Decor<span>.</span>
        </a>

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
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li>
              <a className="nav-link" href="/about">
                About us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="../assets/images/user.svg" alt="User" />
              </a>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <img src="../assets/images/cart.svg" alt="Cart" />
              </a>
            </li>
          </ul>
          <button className="btn btn-primary ms-3">
            <a href="login.html" className="text-white text-decoration-none">
              Login
            </a>
          </button>
        </div>
      </div>
    </nav>

      {/* Hero-Section */}
      <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Design Your <span className="d-block">Own Space</span>
              </h1>
              <p className="mb-4">
                Transforming spaces with elegance and creativity—where style meets comfort, and your vision becomes reality with our expert touch.
              </p>
              <p>
                <a href="shop.html" className="btn btn-secondary me-2">Shop Now</a>
                <a href="#" className="btn btn-white-outline">Explore</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="../assets/images/Flower Hompage.png" className="img-fluid" alt="Decorative Flower" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Product-Section */}
    <div>
      <div className="product-section">
        <div className="container">
          <div className="row">

            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Featured Products.</h2>
              <p className="mb-4">
                Elevate your space with our curated selection—where quality craftsmanship meets timeless design to redefine your home & office with style and sophistication.
              </p>
              <p>
                <a href="shop.html" className="btn">Explore</a>
              </p>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src="../assets/images/Product/Shelves/Shelves (2).jpg" className="img-fluid product-thumbnail" alt="Wall Shelves" />
                <h3 className="product-title">Wall Shelves</h3>
                <strong className="product-price">GH₵ 250.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src="../assets/images/Product/Marble Sheets/Ash Marble Sheets.jpg" className="img-fluid product-thumbnail" alt="Ash 5D Wallpaper" />
                <h3 className="product-title">Ash 5D Wallpaper</h3>
                <strong className="product-price">Gh₵ 100.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src="../assets/images/Product/LED/Butterfly Led.jpg" className="img-fluid product-thumbnail" alt="Butterfly Led" />
                <h3 className="product-title">Butterfly Led</h3>
                <strong className="product-price">Gh₵ 10.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}

          </div>
        </div>
      </div>
      {/* End Product Section */}

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                At Possible Decor, we offer high-quality, unique designs at affordable prices, ensuring your home reflects your style with elegance and sustainability.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="../assets/images/truck.svg" alt="Fast Delivery" className="img-fluid" />
                    </div>
                    <h3>Fast &amp; Effective Delivery</h3>
                    <p>
                      Experience the joy of quick and reliable delivery with Possible Decor. Your stylish home upgrades are just a few clicks away!
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="../assets/images/bag.svg" alt="Easy to Shop" className="img-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Enjoy a seamless shopping experience at Possible Decor with user-friendly navigation, secure payments, and fast delivery for all your decor needs.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="../assets/images/support.svg" alt="24/7 Support" className="img-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      We're here for you around the clock. Enjoy 24/7 customer support to assist with all your decor needs at Possible Decor.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="../assets/images/return.svg" alt="Hassle Free Returns" className="img-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Shop with confidence at Possible Decor, knowing our hassle-free returns make it easy to find the perfect fit for your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img src="../assets/images/Product/Wallpapers/Wallpaper 5.jpeg" alt="Decorative Wallpaper" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}
    </div>

    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src="../assets/images/Product/Marble Sheets/5.jpeg" alt="Marble Sheet" />
              </div>
              <div className="grid grid-2">
                <img src="../assets/images/Product/Wall Panels/Wall Panel 1.jpg" alt="Wall Panel" />
              </div>
              <div className="grid grid-3">
                <img src="../assets/images/Product/Wallpapers/Wallpaper 6.jpeg" alt="Wallpaper" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">Transform Your Space with Modern Interior Design</h2>
            <p>
              Elevate your space with our modern interior design solutions. We offer PVC vinyl floor tiles, various panels, marble stickers, flower vases, and butterfly stickers (both LED and non-LED). Enhance your walls with wallpaper glue, 3D wall clock stickers, and 3D wallpapers. Our professional installation services for wallpapers, PVC tiles, and panels ensure a flawless finish. Transform your home effortlessly with our stylish products and expert services.
            </p>
            <p>
              <a href="#" className="btn">Explore</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
}

export default Home;
