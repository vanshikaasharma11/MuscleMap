import { Link } from "react-router-dom";

export default function Path(){
    return(
        <>
        <Link to="/index.html">1. Home</Link><br/>
         <Link to="/about-us.html">2. About</Link><br/>
         <Link to="/contact.html">3. Contact</Link><br/>
         <Link to="/login">4. Login</Link><br/>
         <Link to="/admin">5. AdminPanel</Link><br/>
         <Link to="/class-details.html">6.Classes</Link>
        
        </>
    )
}