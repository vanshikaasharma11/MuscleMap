import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import {Link} from "react-router-dom";

export default function ClassesTimetable() {
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
    src="img copy/breadcrumb-bg.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Timetable</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Class Timetable Section Begin */}
  <section className="class-timetable-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            <span>Find Your Time</span>
            <h2>Find Your Time</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="table-controls">
            <ul>
              <li className="active" data-tsfilter="all">
                All event
              </li>
              <li data-tsfilter="fitness">Fitness tips</li>
              <li data-tsfilter="motivation">Motivation</li>
              <li data-tsfilter="workout">Workout</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="class-timetable">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="class-time">6.00am - 8.00am</td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">10.00am - 12.00am</td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td className="blank-td" />
                </tr>
                <tr>
                  <td className="class-time">5.00pm - 7.00pm</td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">7.00pm - 9.00pm</td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Class Timetable Section End */}
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