import { Link } from "react-router-dom";

export default function PageTitle({children}){
    return(
        <>
         {/* Page Title */}
         <div className="page-title" >
          <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1>
                      {children}
                      <br />
                    </h1>
                    <p className="mb-0 text-white">
                     Enter Your Email and Password!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <nav className="breadcrumbs">
              <div className="container">
                <ol>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>{children}</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
        </>
    )
}