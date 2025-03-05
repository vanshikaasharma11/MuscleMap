import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import {Link} from "react-router-dom";

export default function Home() {
    return (    
<>
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="canvas-close">
      <i className="fa-solid fa-close" />
    </div>
    <div className="canvas-search search-switch">
      <i className="fa-solid fa-search" />
    </div>
    <nav className="canvas-menu mobile-menu">
      <ul>
        <li className="active">
          <Link to="/index.html">Home</Link>
        </li>
        <li>
          <Link to="/about-us.html">About Us</Link>
        </li>
        <li>
          <Link to="/classes.html">Classes</Link>
        </li>
        <li>
          <Link to="/services.html">Services</Link>
        </li>
        <li>
          <Link to="/team.html">Our Team</Link>
        </li>
        <li>
          <Link to="#">Pages</Link>
          <ul className="dropdown">
            <li>
              <Link to="/about.html">About us</Link>
            </li>
            <li>
              <Link to="/class-timetable.html">Classes timetable</Link>
            </li>
            <li>
              <Link to="/bmi-calculator.html">Bmi calculate</Link>
            </li>
            <li>
              <Link to="/team.html">Our team</Link>
            </li>
            <li>
              <Link to="/blog.html">Our blog</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact.html">Contact</Link>
        </li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="canvas-social">
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
    </div>
  </div>
  {/* Offcanvas Menu Section End */}
  {/* Header Section Begin */}
  <Header/>
  {/* Header End */}
  {/* Hero Section Begin */}



  {/* Hero Section End */}
  {/* ChoseUs Section Begin */}
  <section className="choseus-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Why chose us?</span>
            <h2>PUSH YOUR LIMITS FORWARD</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-034-stationary-bike" />
            <h4>Modern equipment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-033-juice" />
            <h4>Healthy nutrition plan</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-002-dumbell" />
            <h4>Proffesponal training plan</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-014-heart-beat" />
            <h4>Unique to your needs</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End */}
  {/* Classes Section Begin */}
  <section className="classes-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Our Classes</span>
            <h2>WHAT WE CAN OFFER</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="/img copy/classes/class-1.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Weightlifting</h5>
              <Link to="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="/img copy/classes/class-2.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Cardio</span>
              <h5>Indoor cycling</h5>
              <Link to="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="/img copy/classes/class-3.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Kettlebell power</h5>
              <Link to="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="/img copy/classes/class-4.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Cardio</span>
              <h4>Indoor cycling</h4>
              <Link to="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="/img copy/classes/class-5.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Training</span>
              <h4>Boxing</h4>
              <Link to="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End */}
  {/* Banner Section Begin */}
  <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="bs-text">
            <h2>registration now to get more deals</h2>
            <div className="bt-tips">
              Where health, beauty and fitness meet.
            </div>
            <Link to="#" className="primary-btn  btn-normal">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Pricing Section Begin */}
  <section className="pricing-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Our Plan</span>
            <h2>Choose your pricing plan</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>Class drop-in</h3>
            <div className="pi-price">
              <h2>$ 39.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <Link to="#" className="primary-btn pricing-btn">
              Enroll now
            </Link>
            <Link to="#" className="thumb-icon">
              <i className="fa-solid fa-picture-o" />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>12 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 99.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <Link to="#" className="primary-btn pricing-btn">
              Enroll now
            </Link>
            <Link to="#" className="thumb-icon">
              <i className="fa-solid fa-picture-o" />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>6 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 59.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <Link to="#" className="primary-btn pricing-btn">
              Enroll now
            </Link>
            <Link to="#" className="thumb-icon">
              <i className="fa-solid fa-picture-o" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing Section End */}
  {/* Gallery Section Begin */}
  <div className="gallery-section">
    <div className="gallery">
      <div className="grid-sizer" />
      <div
        className="gs-item grid-wide set-bg"
        data-setbg="/img copy/gallery/gallery-1.jpg"
      >
        <Link to="img copy/gallery/gallery-1.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
      <div className="gs-item set-bg" >
        <Link to="img copy/gallery/gallery-2.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
      <div className="gs-item set-bg" >
        <Link to="/img copy/gallery/gallery-3.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
      <div className="gs-item set-bg" >
        <Link to="/img copy/gallery/gallery-4.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
      <div className="gs-item set-bg" >
        <Link to="img/gallery/gallery-5.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
      <div
        className="gs-item grid-wide set-bg"
        data-setbg="img copy/gallery/gallery-6.jpg"
      >
        <Link to="img copy/gallery/gallery-6.jpg" className="thumb-icon image-popup">
          <i className="fa-solid fa-picture-o" />
        </Link>
      </div>
    </div>
  </div>
  {/* Gallery Section End */}
  {/* Team Section Begin */}
  <section className="team-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="team-title">
            <div className="section-title">
              <span>Our Team</span>
              <h2>TRAIN WITH EXPERTS</h2>
            </div>
            <Link to="#" className="primary-btn btn-normal appoinment-btn">
              appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ts-slider owl-carousel">
          <div className="col-lg-4">
            <div className="ts-item set-bg" >
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" >
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-3.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-4.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" >
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" >
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section End */}
  {/* Get In Touch Section Begin */}
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa-solid fa-map-marker" />
            <p>
              333 Middle Winchendon Rd, Rindge,
              <br /> NH 03461
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa-solid fa-mobile" />
            <ul>
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text email">
            <i className="fa-solid fa-envelope" />
            <p>Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Get In Touch Section End */}
  {/* Footer Section Begin */}
  <Footer/>
  {/* Footer Section End */}
  {/* Search model Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
</>

    );
}
