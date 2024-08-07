import React from 'react'
import Loader from '../../components/loader'
import Header from '../../components/header'
import SideMenu from '../../components/sidemenu'

function Cart() {
  return (
    <div>
      <Loader />

      {/* // < !--START MAIN SECTION-- > */}
      <div class="main">
        <div class="body-overlay"></div>

        {/* <!--START PRODUCT SECTION--> */}
        <div class="product-section contact-body">

          <Header />

          <div class="contact-us-content">

            <div class="slider-content">

              <div class="parallax-slide banner-slide" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/shop-banner.jpg)` }}></div>

              {/* <!-- START HEADING SECTION --> */}
              <div class="about_content">
                <div class="container">
                  <div class="row">
                    <div class="col-12  col-lg-8 offset-lg-2 text-center wow slideInUp" data-wow-duration="2s">
                      <h1 class="heading">Shop Cart</h1>
                      <p class="para_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END HEADING SECTION --> */}

              {/* <!-- START SHOP CART SECTION --> */}
              <div class="shop-cart">
                <div class="container">

                  {/* <!-- START SHOP CART TABLE --> */}
                  <div class="row">
                    <div class="col-12 col-md-10 offset-md-1 cart_table wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: "visible", animationDelay: "300ms", animationName: "fadeInUp" }}
                    >
                      <div class="table-responsive">
                        <table class="table table-bordered border-radius">
                          <thead>
                            <tr>
                              <th class="darkcolor">Product</th>
                              <th class="darkcolor">Price</th>
                              <th class="darkcolor">Quantity</th>
                              <th class="darkcolor">Total</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-table">
                                  <div class="d-table-cell">
                                    <a class="shopping-product" href="img\shoes\thumb1.jpg"><img src="img\shoes\thumb1.jpg" alt="product" /></a>
                                  </div>
                                  <div class="d-table-cell">
                                    <h4 class="product-name"><a href="product-detail.html">Blue Shoe</a></h4>
                                    <p>We offer the most complete in the country</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h4 class="text-center amount">$130.00</h4>
                              </td>
                              <td class="text-center">
                                <div class="quote text-center">
                                  <input type="text" placeholder="1" class="rounded-pill quote" />
                                </div>
                              </td>
                              <td>
                                <h4 class="text-center amount">$136.00</h4>
                              </td>
                              <td class="text-center"><a class="btn-xoa" href="#."><i class="lni-trash"></i></a></td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-table">
                                  <div class="d-table-cell">
                                    <a class="shopping-product" href="img\shoes\thumb2.jpg"><img src="img\shoes\thumb2.jpg" alt="product" /></a>
                                  </div>
                                  <div class="d-table-cell">
                                    <h4 class="product-name"><a href="product-detail.html">Red Shoe</a></h4>
                                    <p class="product-des">We offer the most complete in the country</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h4 class="text-center d-table-price amount">$130.00</h4>
                              </td>
                              <td class="text-center">
                                <div class="quote text-center">
                                  <input type="text" placeholder="1" class="rounded-pill quote" />
                                </div>
                              </td>
                              <td>
                                <h4 class="text-center amount">$136.00</h4>
                              </td>
                              <td class="text-center"><a class="btn-xoa" href="#"><i class="lni-trash"></i></a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="apply_coupon">
                        <div class="row">
                          <div class="col-6  text-lg-left text-center">
                            <a href="faq.html" class="btn our-btn btn-transparent-black rounded-pill btn-sm">Update</a>
                          </div>
                          <div class="col-6  coupon text-lg-right text-center">
                            <a href="faq.html" class="btn our-btn btn-gradient rounded-pill btn-sm">CheckOut</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END SHOP CART TABLE --> */}

                  {/* <!-- START SHOP CART CHECKOUT FORM --> */}
                  <div class="row pt-5">
                    <div class="col-12 col-lg-5 offset-lg-1 wow slideInUp" data-wow-duration="2s">
                      <div class="calculate-shipping">
                        <h4 class="heading">Calculate Shipping</h4>
                        <form>
                          <div class="form-group">
                            <label class="select form-control">
                              <select name="country" id="states">
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Chile</option>
                                <option>France</option>
                              </select>
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="select form-control">
                              <select name="country" id="state">
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Chile</option>
                                <option>France</option>
                              </select>
                            </label>
                          </div>
                          <div class="form-group">
                            <input class="form-control rounded-pill" placeholder="Postal/Zip Code" />
                          </div>
                          <a href="#" class="btn our-btn btn-gradient rounded-pill">Calculate</a>
                        </form>
                      </div>
                    </div>
                    <div class="col-12 col-lg-5 wow slideInUp" data-wow-duration="2s">
                      <div class="card-total">
                        <h4 class="heading">Card Total</h4>
                        <table>
                          <tr>
                            <td>Subtotal</td>
                            <td>$251.00</td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>
                              <ul class="color-grey">
                                <li>
                                  <div class="custom-control custom-radio">
                                    <input type="radio" id="flat-rate" name="shipping" class="custom-control-input" checked="" />
                                    <label class="custom-control-label" for="flat-rate">Flat Rate : $49.00</label>
                                  </div>
                                </li>
                                <li>
                                  <div class="custom-control custom-radio">
                                    <input type="radio" id="free-shipping" name="shipping" class="custom-control-input" />
                                    <label class="custom-control-label" for="free-shipping">Free Shipping</label>
                                  </div>
                                </li>
                                <li>
                                  <div class="custom-control custom-radio">
                                    <input type="radio" id="cod-shipping" name="shipping" class="custom-control-input" />
                                    <label class="custom-control-label" for="cod-shipping">Cash on Delivery</label>
                                  </div>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td>$300.00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END SHOP CART CHECKOUT FORM --> */}

                </div>
              </div>
              {/* <!-- END SHOP CART SECTION--> */}


              {/* <!--START FOOTER NOTES --> */}
              <div class="row">
                <div class="col-12 text-center footer_rights pb-5">
                  <p>&copy; 2019 MegaOne. Made With Love by <a class="web-link" href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                </div>
              </div>
              {/* <!--END FOOTER NOTES --> */}

            </div>

          </div>


          <SideMenu />

        </div>
        {/* <!--END PRODUCT SECTION--> */}

      </div>
      {/* <!--END MAIN SECTION-- > */}

    </div>
  )
}

export default Cart