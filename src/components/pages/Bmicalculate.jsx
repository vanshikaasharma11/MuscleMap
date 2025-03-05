import {Link} from "react-router-dom";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
export default function Bmicalculate() {
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
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-youtube-play" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        {/* Offcanvas Menu Section End */}
        {/* Header Section Begin */}
        <Header/>
        {/* Header End */}
        {/* Breadcrumb Section Begin */}
        <section
          className="breadcrumb-section set-bg"
          data-setbg="img/breadcrumb-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb-text">
                  <h2>BMI calculator</h2>
                  <div className="bt-option">
                    <a href="./index.html">Home</a>
                    <a href="#">Pages</a>
                    <span>BMI calculator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* BMI Calculator Section Begin */}
        <section className="bmi-calculator-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title chart-title">
                  <span>check your body</span>
                  <h2>BMI CALCULATOR CHART</h2>
                </div>
                <div className="chart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Bmi</th>
                        <th>WEIGHT STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="point">Below 18.5</td>
                        <td>Underweight</td>
                      </tr>
                      <tr>
                        <td className="point">18.5 - 24.9</td>
                        <td>Healthy</td>
                      </tr>
                      <tr>
                        <td className="point">25.0 - 29.9</td>
                        <td>Overweight</td>
                      </tr>
                      <tr>
                        <td className="point">30.0 - and Above</td>
                        <td>Obese</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title chart-calculate-title">
                  <span>check your body</span>
                  <h2>CALCULATE YOUR BMI</h2>
                </div>
                <div className="chart-calculate-form">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </p>
                  <form action="#">
                    <div className="row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Height / cm" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Weight / kg" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Age" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Sex" />
                      </div>
                      <div className="col-lg-12">
                        <button type="submit">Calculate</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BMI Calculator Section End */}
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