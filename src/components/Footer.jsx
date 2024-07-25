import React from 'react'
import { LiaInstagram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { TbMessageQuestion } from "react-icons/tb";
import { CiCircleMore } from "react-icons/ci";
function Footer() {
  return (
    <>
    <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Contact Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><LiaInstagram />Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaWhatsapp />Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><CiFacebook />WhatsApp</a></li>
          
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Details</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><IoMdHome />Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><MdOutlineFeaturedVideo />Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><IoPricetagOutline />Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><TbMessageQuestion />FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><CiCircleMore />About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our Website</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer