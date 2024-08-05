import React from 'react'

function Panels() {
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
            <li className="active"><a className="nav-link" href="/shop">Shop</a></li>
            <li><a className="nav-link" href="/about">About us</a></li>
            <li><a className="nav-link" href="/services">Services</a></li>
            <li><a className="nav-link" href="/blog">Blog</a></li>
            <li><a className="nav-link" href="/contact">Contact us</a></li>
        </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a className="nav-link" href="#"><img src="./assets/images/user.svg" alt="User Icon" /></a></li>
            <li><a className="nav-link" href="/cart"><img src="./assets/images/cart.svg" alt="Cart Icon" /></a></li>
        </ul>
    </div>
</div>

</nav>

<div className="hero">
<div className="container">
    <div className="row justify-content-between">
        <div className="col-lg-5">
            <div className="intro-excerpt">
                <h1>Fluted Panels</h1>
            </div>
        </div>
        <div className="col-lg-7">
            
        </div>
    </div>
</div>
</div>

<div className="shop">
    <div className="container">
        <div className="sidebar">
            <h2>Categories</h2>
            <ul className="category-list">
                <li><a href="/wallpapers">Wallpapers</a></li>
                <li><a href="/Flowers">Decor Flowers</a></li>
                <li><a href="/Tiles">PVC Tiles & Wall Panels</a></li>
                <li><a href="/Panels">Fluted Panels</a></li>
                <li><a href="/Sheets">Marble Sheets</a></li>
                <li><a href="/vases">Vases</a></li>
                <li><a href="/wallclocks">Wall Clocks</a></li>
                <li><a href="/Accessories">Decor Accessories</a></li>
                <li><a href="/shelves">Shelves</a></li>
                {/* Add more categories as needed */}
            </ul>
            <div className="search-bar">
                <input type="text" id="product-search" placeholder="Search products..."/>
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
                                <img src="./assets/images/Product/Fluted Panels/1.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 1" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 1 */}
                        
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/2.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 2" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}
                        
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <div className="product-img">
                                    <img src="./assets/images/Product/Fluted Panels/3.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 3" />
                                </div>
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}
                        
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-7">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/4.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 4" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}
                        
                        {/* Start Column 5 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/6.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 5" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 5 */}
                        
                        {/* Start Column 6 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/7.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 6" />
                                <h3 className="product-title">Fluted Panels</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 6 */}
                        
                        {/* Start Column 7 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/8.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 7" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 7 */}
                        
                        {/* Start Column 8 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="./assets/images/Product/Fluted Panels/Fluted Panels.jpg" className="img-fluid product-thumbnail" alt="Fluted Panel 8" />
                                <h3 className="product-title">Fluted Panel</h3>
                                <strong className="product-price">GH₵ 400.00</strong>
                                <span className="icon-cross">
                                    <img src="./assets/images/cross.svg" className="img-fluid" alt="Close Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 8 */}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Panels