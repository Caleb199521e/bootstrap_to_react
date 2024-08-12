import React, { useState } from 'react';

const Checkout = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showShipDifferentAddress, setShowShipDifferentAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <>
      {/* End Header/Navigation */}

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="./login">Click here</a> to login
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group">
                  <label htmlFor="c_country" className="text-black">
                    Country <span className="text-danger">*</span>
                  </label>
                  <select id="c_country" className="form-control">
                    <option value="1">Select a country</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_fname" className="text-black">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_fname" name="c_fname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_lname" className="text-black">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">Company Name</label>
                    <input type="text" className="form-control" id="c_companyname" name="c_companyname" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_state_country" className="text-black">
                      State / Country <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_postal_zip" className="text-black">
                      Posta / Zip <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
                  </div>
                </div>
                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label htmlFor="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="c_create_account"
                    className="text-black"
                    data-bs-toggle="collapse"
                    href="#create_an_account"
                    role="button"
                    aria-expanded={showCreateAccount}
                    aria-controls="create_an_account"
                  >
                    <input
                      type="checkbox"
                      value="1"
                      id="c_create_account"
                      onChange={() => setShowCreateAccount(!showCreateAccount)}
                    />{' '}
                    Create an account?
                  </label>
                  <div className={`collapse ${showCreateAccount ? 'show' : ''}`} id="create_an_account">
                    <div className="py-2 mb-4">
                      <p className="mb-3">
                        Create an account by entering the information below. If you are a returning customer please
                        login at the top of the page.
                      </p>
                      <div className="form-group">
                        <label htmlFor="c_account_password" className="text-black">Account Password</label>
                        <input type="email" className="form-control" id="c_account_password" name="c_account_password" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="c_ship_different_address"
                    className="text-black"
                    data-bs-toggle="collapse"
                    href="#ship_different_address"
                    role="button"
                    aria-expanded={showShipDifferentAddress}
                    aria-controls="ship_different_address"
                  >
                    <input
                      type="checkbox"
                      value="1"
                      id="c_ship_different_address"
                      onChange={() => setShowShipDifferentAddress(!showShipDifferentAddress)}
                    />{' '}
                    Ship To A Different Address?
                  </label>
                  <div className={`collapse ${showShipDifferentAddress ? 'show' : ''}`} id="ship_different_address">
                    <div className="py-2">
                      <div className="form-group">
                        <label htmlFor="c_diff_country" className="text-black">
                          Country <span className="text-danger">*</span>
                        </label>
                        <select id="c_diff_country" className="form-control">
                          <option value="1">Select a country</option>
                          <option value="2">Bangladesh</option>
                          <option value="3">Algeria</option>
                          <option value="4">Afghanistan</option>
                          <option value="5">Ghana</option>
                          <option value="6">Albania</option>
                          <option value="7">Bahrain</option>
                          <option value="8">Colombia</option>
                          <option value="9">Dominican Republic</option>
                        </select>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_diff_fname" className="text-black">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_diff_lname" className="text-black">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_diff_companyname" className="text-black">Company Name</label>
                          <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_diff_address" className="text-black">
                            Address <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="c_diff_address" name="c_diff_address" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_diff_state_country" className="text-black">
                            State / Country <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_diff_postal_zip" className="text-black">
                            Postal / Zip <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="c_diff_email_address" className="text-black">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="c_diff_phone" className="text-black">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="h3 mb-3 text-black">Your Order</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Product Name</span>
                    <strong>$X.XX</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Product Name</span>
                    <strong>$X.XX</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Product Name</span>
                    <strong>$X.XX</strong>
                  </li>
                </ul>
                <div className="d-flex justify-content-between py-3 border-bottom">
                  <span className="text-black">Subtotal</span>
                  <strong>$X.XX</strong>
                </div>
                <div className="d-flex justify-content-between py-3 border-bottom">
                  <span className="text-black">Shipping</span>
                  <strong>$X.XX</strong>
                </div>
                <div className="d-flex justify-content-between py-3 border-bottom">
                  <span className="text-black">Total</span>
                  <strong>$X.XX</strong>
                </div>
                <div className="form-group">
                  <label className="text-black">Payment Method</label>
                  <select className="form-control" onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="">Select payment method</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                </div>
                <button className="btn btn-primary btn-lg btn-block">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Checkout Form */}
    </>
  );
};

export default Checkout;
