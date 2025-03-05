import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";


export default function About() {
  return (
<>
  
  {/* Offcanvas Menu Section Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="canvas-close">
      <i className="fa fa-close" />
    </div>
    <div className="canvas-search search-switch">
      <i className="fa fa-search" />
    </div>
    <nav className="canvas-menu mobile-menu">
      <ul>
        <li>
          <Link to="./index.html">Home</Link>
        </li>
        <li>
          <Link to="./about-us.html">About Us</Link>
        </li>
        <li>
          <Link to="./classes.html">Classes</Link>
        </li>
        <li>
          <Link to="./services.html">Services</Link>
        </li>
        <li>
          <Link to="./team.html">Our Team</Link>
        </li>
        <li>
          <Link to="#">Pages</Link>
          <ul className="dropdown">
            <li>
              <Link to="./about.html">About us</Link>
            </li>
            <li>
              <Link to="./class-timetable.html">Classes timetable</Link>
            </li>
            <li>
              <Link to="./bmi-calculator.html">Bmi calculate</Link>
            </li>
            <li>
              <Link to="./team.html">Our team</Link>
            </li>
            <li>
              <Link to="./gallery.html">Gallery</Link>
            </li>
            <li>
              <Link to="./blog.html">Our blog</Link>
            </li>
            <li>
              <Link to="./404.html">404</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="./contact.html">Contact</Link>
        </li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="canvas-social">
      <Link to="#">
        <i className="fa fa-facebook" />
      </Link>
      <Link to="#">
        <i className="fa fa-twitter" />
      </Link>
      <Link to="#">
        <i className="fa fa-youtube-play" />
      </Link>
      <Link to="#">
        <i className="fa fa-instagram" />
      </Link>
    </div>
  </div>
  {/* Offcanvas Menu Section End */}
  {/* Header Section Begin */}
  <Header/>
  {/* Header End */}
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
    data-setbg="img copy/breadcrumb-bg.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>About us</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
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
  {/* About US Section Begin */}
  <section className="aboutus-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="about-video set-bg" data-setbg="img/about-us.jpg">
            <Link
             to="https://www.youtube.com/watch?v=EzKkl64rRbM"
              className="play-btn video-popup"
            >
              <i className="fa fa-caret-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="about-text">
            <div className="section-title">
              <span>About Us</span>
              <h2>What we have done</h2>
            </div>
            <div className="at-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. aliquip ex ea commodo
                consequat sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor.
              </p>
            </div>
            <div className="about-bar">
              <div className="ab-item">
                <p>Body building</p>
                <div id="bar1" className="barfiller">
                  <span className="fill" data-percentage={80} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Training</p>
                <div id="bar2" className="barfiller">
                  <span className="fill" data-percentage={85} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Fitness</p>
                <div id="bar3" className="barfiller">
                  <span className="fill" data-percentage={75} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About US Section End */}
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
            <div className="ts-item set-bg" data-setbg="img/team/team-1.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img copy/team/team-2.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img copy/team/team-3.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img copy/team/team-4.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img copy/team/team-5.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img copy/team/team-6.jpg">
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
  {/* Banner Section Begin */}
  <section className="banner-section set-bg" data-setbg="img copy/banner-bg.jpg">
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
  {/* Testimonial Section Begin */}
  <section className="testimonial-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Testimonial</span>
            <h2>Our cilent say</h2>
          </div>
        </div>
      </div>
      <div className="ts_slider owl-carousel">
        <div className="ts_item">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="ti_pic">
                <img src="img copy/testimonial/testimonial-1.jpg" alt="" />
              </div>
              <div className="ti_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <br /> ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo
                  <br /> viverra maecenas accumsan lacus vel facilisis.
                </p>
                <h5>Marshmello Gomez</h5>
                <div className="tt-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ts_item">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="ti_pic">
                <img src="img copy/testimonial/testimonial-2.jpg" alt="" />
              </div>
              <div className="ti_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <br /> ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo
                  <br /> viverra maecenas accumsan lacus vel facilisis.
                </p>
                <h5>Marshmello Gomez</h5>
                <div className="tt-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section End */}
  {/* Get In Touch Section Begin */}
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-map-marker" />
            <p>
              333 Middle Winchendon Rd, Rindge,
              <br /> NH 03461
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-mobile" />
            <ul>
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text email">
            <i className="fa fa-envelope" />
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
