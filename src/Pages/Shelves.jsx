import React from 'react'

function shelves() {
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
      {/* Main content, like products listing, here */}
      <div className="untree_co-section product-section before-footer-section">
        <div className="product-container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Shelves/1.jpg" className="img-fluid product-thumbnail" alt="Black and Orange Shelves" />
                <h3 className="product-title">Black and Orange Shelves</h3>
                <strong className="product-price">GH₵ 250.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Shelves/10.jpg" className="img-fluid product-thumbnail" alt="Colourful Shelves" />
                <h3 className="product-title">Colourful Shelves</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <div className="product-img"><img src="../assets/images/Product/Shelves/11.jpg" className="img-fluid product-thumbnail" alt="Grey Shelves" /></div>
                <h3 className="product-title">Grey Shelves</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-7">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Shelves/12.jpg" className="img-fluid product-thumbnail" alt="Red and White Shelves" />
                <h3 className="product-title">Red and White Shelves</h3>
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
                <img src="../assets/images/Product/Shelves/13.jpg" className="img-fluid product-thumbnail" alt="Oval Black and Purple Shelves" />
                <h3 className="product-title">Oval Black and Purple Shelves</h3>
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
                <img src="../assets/images/Product/Shelves/14.jpg" className="img-fluid product-thumbnail" alt="White and Black Shelves" />
                <h3 className="product-title">White and Black Shelves</h3>
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
                <img src="../assets/images/Product/Shelves/15.jpg" className="img-fluid product-thumbnail" alt="Three Colored Shelves" />
                <h3 className="product-title">Three Colored Shelves</h3>
                <strong className="product-price">GH₵ 200.00</strong>
                <span className="icon-cross">
                  <img src="../assets/images/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src="../assets/images/Product/Shelves/19.jpg" className="img-fluid product-thumbnail" alt="Red and White Shelves" />
                <h3 className="product-title">Red and White Shelves</h3>
                <strong className="product-price">GH₵ 250.00</strong>
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

export default shelves