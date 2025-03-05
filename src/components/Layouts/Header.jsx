import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
<header className="header-section">
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-3">
      <div className="logo">
        <Link to="/index.html">
          <img src="img copy/logo.png" alt="" />
        </Link>
      </div>
    </div>
    <div className="col-lg-6">
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/index.html">Home</Link>
          </li>
          <li>
            <Link to="/about-us.html">About Us</Link>
          </li>
          <li>
            <Link to="/class-details.html">Classes</Link>
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
                <Link to="/about-us.html">About us</Link>
              </li>
              <li>
                <Link to="/class-timetable.html">Classes timetable</Link>
              </li>
              <li>
                <Link to="/bmi-calculator.html">Bmi calculate</Link>
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
    </div>
    <div className="col-lg-3">
      <div className="top-option">
        <div className="to-search search-switch">
          <i className="fa-solid fa-search" />
        </div>
        <div className="to-social">
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
    </div>
  </div>
  <div className="canvas-open">
    <i className="fa-solid fa-bars" />
  </div>
</div>
</header>
</>
    )
}