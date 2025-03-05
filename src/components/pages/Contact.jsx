import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import {Link} from "react-router-dom";
export default function Contact(){
    return(
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
              <Link to="./blog.html">Our blog</Link>
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
            <h2>Contact Us</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Contact Section Begin */}
  <section className="contact-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title contact-title">
            <span>Contact Us</span>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className="contact-widget">
            <div className="cw-text">
              <i className="fa fa-map-marker" />
              <p>
                333 Middle Winchendon Rd, Rindge,
                <br /> NH 03461
              </p>
            </div>
            <div className="cw-text">
              <i className="fa fa-mobile" />
              <ul>
                <li>125-711-811</li>
                <li>125-668-886</li>
              </ul>
            </div>
            <div className="cw-text email">
              <i className="fa fa-envelope" />
              <p>Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="leave-comment">
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Website" />
              <textarea placeholder="Comment" defaultValue={""} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
        height={600}
          style={{ border: 0 }}
          
        />
      </div>
    </div>
  </section>
  {/* Contact Section End */}
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
    )
}
