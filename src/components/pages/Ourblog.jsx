import {Link} from "react-router-dom";
import Headers from "../Layouts/Header";
import Footer from "../Layouts/Footer";
export default function Ourblog() {
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
  <Headers/>
  {/* Header End */}
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
  >
    <img src="img copy/breadcrumb-bg.jpg"/>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Our Blog</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Blog Section Begin */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 p-0">
          <div className="blog-item">
            <div className="bi-pic">
              <img src="img copy/blog/blog-1.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="img copy/blog/blog-2.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="img copy/blog/blog-3.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="img copy/blog/blog-4.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="/blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="img copy/blog/blog-5.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="/blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">Next</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 p-0">
          <div className="sidebar-option">
            <div className="so-categories">
              <h5 className="title">Categories</h5>
              <ul>
                <li>
                  <a href="#">
                    Yoga <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Runing <span>32</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Weightloss <span>86</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Cario <span>25</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Body buiding <span>36</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Nutrition <span>15</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="so-latest">
              <h5 className="title">Feature posts</h5>
              <div
                className="latest-large set-bg"
              
              >
                <img src="img copy/letest-blog/latest-1.jpg"alt="" />
                <div className="ll-text">
                  <h5>
                    <a href="/blog-details.html">
                      This Japanese Way of Making Iced Coffee Is a Game...
                    </a>
                  </h5>
                  <ul>
                    <li>Aug 20, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img copy/letest-blog/latest-2.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      Grilled Potato and Green Bean Salad
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img copy/letest-blog/latest-3.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      The $8 French Rosé I Buy in Bulk Every Summer
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img copy/letest-blog/latest-4.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      Ina Garten's Skillet-Roasted Lemon Chicken
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img copy/letest-blog/latest-5.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      The Best Weeknight Baked Potatoes, 3 Creative Ways
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
            </div>
            <div className="so-tags">
              <h5 className="title">Popular tags</h5>
              <a href="#">Gyming</a>
              <a href="#">Body buidling</a>
              <a href="#">Yoga</a>
              <a href="#">Weightloss</a>
              <a href="#">Proffeponal</a>
              <a href="#">Streching</a>
              <a href="#">Cardio</a>
              <a href="#">Karate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
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