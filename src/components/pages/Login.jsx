import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import PageTitle from "../Layouts/PageTitle"
import { CircleLoader, HashLoader } from "react-spinners"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load,setLoad]=useState(false)
    const nav = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        setLoad(true)
        if (email === "admin@gmail.com" && password === "123456") {
            toast.success("Login successfully")
            nav("/admin")
        }
        else if(email === 'user@gmail.com' && password === "123"){
            toast.success("Login successfully")
            nav("/")
        }
        else{
            toast.error("Wrong Credentials!")
        }
        setTimeout(()=>{
            setLoad(false)
        },1500)
    }
    return (
        <>
            <main className="main" style={{backgroundColor:"rgb(255, 119, 0)", color:"white", height:"100vh"
            
            
            }}>
                <PageTitle>Login</PageTitle>
                {/* Contact Section */}
                <section id="contact" className="contact section">
            
               
                <div className="container" style={{marginTop:"50px" ,backgroundColor:"white",height:"50vh", width:"80vh", borderRadius:"20px"}}>
                    <HashLoader color="black" size="50" cssOverride={{display:"block", margin:"0 auto", height:"100vh" ,width:"50vh" }} loading={load}/>
                    <div className={load==true && "d-none"}>
                        <div className="row justify-content-center gy-4">
                    
                        <div className="col-lg-6">
                            <form
                            method="post"
                            className="php-email-form"
                            onSubmit={submitForm}
                            >
                            <div className="row gy-4">
                            
                                <div className="col-md-12 mt-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    required=""
                                    value={email} 
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                </div>
                                <div className="col-md-12 mt-4" style={{marginBottom:"20px"}}>
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Your Password"
                                    required=""
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                                </div>
                                <div className="col-md-12 text-center">  
                                <button type="submit" style={{color:"orange",backgroundColor:"black",width:"100px", height:"35px", borderRadius:"20px",marginTop:"30px"}}>Login</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/* End Contact Form */}
                        </div>
                    </div>
                </div>
                </section>
                {/* /Contact Section */}
            </main>
            
        </>
    )
}