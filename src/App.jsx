import { BrowserRouter, Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import About from "./components/pages/About";
import "./css/barfiller.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Bmicalculate from "./components/pages/Bmicalculate";
import ClassesTimetable from "./components/pages/ClassesTimetable";
import Ourblog from "./components/pages/Ourblog";
import Login from "./components/pages/Login";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import Error from "./components/pages/Error";
import "react-toastify/dist/ReactToastify.css"
import Classes from "./components/pages/Classes";


function App(){
  return(
   <>
   <BrowserRouter>
    <Routes>

      <Route path="/" element={<Path/>}/>
      <Route path="/index.html" element={<Home/>}/>
      <Route path="/about-us.html" element={<About/>}/>
      <Route path="/contact.html" element={<Contact/>}/>
      <Route path="/bmi-calculator.html" element={<Bmicalculate/>}/>
      <Route path="/class-timetable.html" element={<ClassesTimetable/>}/>
      <Route path="/class-details.html"element={<Classes/>}/>
      <Route path="/blog.html" element={<Ourblog/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
      </Route>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/*" element={<Error/>} />
    </Routes>
   </BrowserRouter>
   <ToastContainer/>
   </>
  )
}
export default App

