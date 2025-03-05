import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
<section className="footer-section">
<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="fs-about">
        <div className="fa-logo">
          <Link to="#">
            <img src="img copy/logo.png" alt="" />
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore dolore magna aliqua endisse
          ultrices gravida lorem.
        </p>
        <div className="fa-social">
          <Link to="#">
            <i className="fa-brands fa-facebook" />
          </Link>
          <Link to="#">
            <i className="fa-brands fa-twitter" />
          </Link>
          <Link to="#">
            <i className="fa-brands fa-youtube-play" />
          </Link>
          <Link to="#">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link to="#">
            <i className="fa-brands  fa-envelope-o" />
          </Link>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-3 col-sm-6">
      <div className="fs-widget">
        <h4>Useful links</h4>
        <ul>
          <li>
            <Link to ="/about-us.html">About</Link>
          </li>
          <li>
            <Link to="/blog.html">Blog</Link>
          </li>
          <li>
            <Link to="/classes.html">Classes</Link>
          </li>
          <li>
            <Link to="/contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-lg-2 col-md-3 col-sm-6">
      <div className="fs-widget">
        <h4>Support</h4>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="#">My account</Link>
          </li>
          <li>
            <Link to="#">Subscribe</Link>
          </li>
          <li>
            <Link to="/contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="fs-widget">
        <h4>Tips &amp; Guides</h4>
        <div className="fw-recent">
          <h6>
            <Link to="#">
              Physical fitness may help prevent depression, anxiety
            </Link>
          </h6>
          <ul>
            <li>3 min read</li>
            <li>20 Comment</li>
          </ul>
        </div>
        <div className="fw-recent">
          <h6>
            <Link to="#">
              Fitness: The best exercise to lose belly fat and tone up...
            </Link>
          </h6>
          <ul>
            <li>3 min read</li>
            <li>20 Comment</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="copyright-text">
        <p>
         
          Copyright © All rights reserved |

          
           Made by Vanshika & Babita
        
         
        </p>
      </div>
    </div>
  </div>
</div>
</section>
</>
    )
}