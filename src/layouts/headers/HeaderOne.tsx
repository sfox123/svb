
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
 
export default function HeaderOne() {

  const [opneMenu, setOpneMenu] = useState(false)

  return (
    <>
      <header id="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-30 left-col align-self-center rk_style">
              <div className="site-logo">
                <Link href="/"><img src="assets/img/logo.png" alt="Edumon" /></Link>
              </div>
            </div>

            <div className="col-40 justify-content-center d-flex align-self-center">
              <nav id="main-menu">
                <NavMenu />
              </nav>
            </div>

            <div className="col-30 right-col align-self-center text-end">
              <a href="/contact" className="white-btn bt">Contact Us</a>
            </div>

          </div>
        </div>

        <div id="mini_cart" className="cart_drawer">
          <div className="cart_top">
            <a href="#" className="cart_close"><i className='bx bx-x'></i></a>
            <h3 className="title">Courses List</h3>
            <span className="cart_number">
              3
            </span>
          </div>

          <div className="mini_cart_list">
            <ul>
              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <a href="course-details.html" className="mc_img">
                    <img src="assets/img/mcart/1.jpg" alt="Product Name" />
                  </a>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <a href="course-details.html">
                      Photography Crash Course
                    </a>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>

              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <a href="course-details.html" className="mc_img">
                    <img src="assets/img/mcart/2.jpg" alt="Product Name" />
                  </a>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <a href="course-details.html">
                      Photography Crash Course
                    </a>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>

              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <a href="course-details.html" className="mc_img">
                    <img src="assets/img/mcart/3.jpg" alt="Product Name" />
                  </a>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <a href="course-details.html">
                      Photography Crash Course
                    </a>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="cart_drawer_btm">
            <div className="sub-total">
              <span className="total-title float-start">Total:</span>
              <span className="total-price float-end">$75.00</span>
            </div>

            <div className="bottom_group">
              <a href="cart.html" className="button-viewcart">
                <span>View Cart</span>
              </a>
              <a href="checkout.html" className="button-checkout">
                <span>Checkout</span>
              </a>
            </div>
          </div>
        </div>

      <MobileMenu opneMenu={opneMenu} />

      </header>
    </>
  )
}
