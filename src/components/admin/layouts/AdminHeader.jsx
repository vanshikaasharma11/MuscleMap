export default function AdminHeader() {
    return (
        <>
<header className="header-section">
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-3">
      <div className="logo">
        <a href="./index.html">
          <img src="/img copy/logo.png" alt="" />
        </a>
      </div>
    </div>
    <div className="col-lg-6">
      <nav className="nav-menu">
        <ul>
          <li className="active">
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./about-us.html">About Us</a>
          </li>
          <li>
            <a href="./class-details.html">Classes</a>
          </li>
          <li>
            <a href="./services.html">Services</a>
          </li>
          <li>
            <a href="./team.html">Our Team</a>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li>
                <a href="./about-us.html">About us</a>
              </li>
              <li>
                <a href="./class-timetable.html">Classes timetable</a>
              </li>
              <li>
                <a href="./bmi-calculator.html">Bmi calculate</a>
              </li>
              <li>
                <a href="./team.html">Our team</a>
              </li>
              <li>
                <a href="./gallery.html">Gallery</a>
              </li>
              <li>
                <a href="./blog.html">Our blog</a>
              </li>
              <li>
                <a href="./404.html">404</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col-lg-3">
      <div className="top-option">
        <div className="to-search search-switch">
          <i className="fa fa-search" />
        </div>
        <div className="to-social">
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
    </div>
  </div>
  <div className="canvas-open">
    <i className="fa fa-bars" />
  </div>
</div>
</header>
</>
    )
}