import React from 'react'

function Vases() {
  return (



    <div>
    

<div className="hero">
<div className="container">
    <div className="row justify-content-between">
        <div className="col-lg-5">
            <div className="intro-excerpt">
                <h1>Vases</h1>
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
            <li><a href="/Panels">Panels</a></li>
            <li><a href="/Sheets">Marble Sheets</a></li>
            <li><a href="/vases">Vases</a></li>
            <li><a href="/wallclocks">Wall Clocks</a></li>
            <li><a href="/Accessories">Decor Accessories</a></li>
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
                        {/* Start Column 1 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/7.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Squish Vase"
                                />
                                <h3 className="product-title">Squish Vase</h3>
                                <strong className="product-price">GH₵ 200.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 1 */}
                        
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/1.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Oval Vase"
                                />
                                <h3 className="product-title">Oval Vase</h3>
                                <strong className="product-price">GH₵ 150.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}

                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <div className="product-img">
                                    <img
                                        src="./assets/images/Product/Vases/10.jpg"
                                        className="img-fluid product-thumbnail"
                                        alt="Love Vase"
                                    />
                                </div>
                                <h3 className="product-title">Love Vase</h3>
                                <strong className="product-price">GH₵ 200.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}

                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-7">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/13.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Stacked Pot Vase"
                                />
                                <h3 className="product-title">Stacked Pot Vase</h3>
                                <strong className="product-price">GH₵ 220.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}

                        {/* Start Column 5 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/14.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Golden Vase"
                                />
                                <h3 className="product-title">Golden Vase</h3>
                                <strong className="product-price">GH₵ 200.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 5 */}

                        {/* Start Column 6 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/15.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Black Skull Vase"
                                />
                                <h3 className="product-title">Black Skull Vase</h3>
                                <strong className="product-price">GH₵ 100.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 6 */}

                        {/* Start Column 7 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/2.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Artistic Vase"
                                />
                                <h3 className="product-title">Artistic Vase</h3>
                                <strong className="product-price">GH₵ 200.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
                                </span>
                            </a>
                        </div>
                        {/* End Column 7 */}

                        {/* Start Column 8 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src="./assets/images/Product/Vases/3.jpg"
                                    className="img-fluid product-thumbnail"
                                    alt="Vase"
                                />
                                <h3 className="product-title">Vase</h3>
                                <strong className="product-price">GH₵ 150.00</strong>
                                <span className="icon-cross">
                                    <img
                                        src="./assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Close Icon"
                                    />
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

export default Vases