import React, { useEffect, useState } from "react";
import "./login.css";
import Topbar from "../../components/topbar/topbar";
import Footer from "../../components/footer/footer"
import { Link } from "react-router-dom";


export default function Login(props) {
    
    const [id, setId] = useState("");
    // const [display, setDisplay] = useState(false);
    
    // export {display,setDisplay}
//   useEffect(()=>{

//       localStorage.setItem("loggedin" , display )
//   },[display])


  let idtyped = "";
  const trueId = "Sahana@123";

  if(localStorage.getItem("log")){
    props.setlog(true)
  }

  async function handleSubmit() {
    // setDisplay(id === trueId ? true : false);


    // if(localStorage)

   await props.setlog(id === trueId ? true : false);
   
    localStorage.setItem("log", props.log)
    
  }

  return (
    <div>
      <Topbar />

      <div className="container px-5 py-5 display-login">
        <div 
        style={( (props.log === true && localStorage.getItem("log") !==false) ?  {display: "none"} : { display:"flex", flexDirection:"column"})}
         className="checkdisplay container-fluid">
          <label className="label-otp text-center my-5" htmlFor="otpp">
            Enter The Code to Login
          </label>


          {/* <div className="otp" id='otpp'> */}
          <input
            type="text"
            onChange={(e) => {
              idtyped = e.target.value;
              setId(idtyped);
            }}
            className="d-block input-otp px-3 py-3"
            name=""
            autoComplete= "false"
            id="otpp"
            placeholder="Enter the login ID"
          />

        <button
          onClick={handleSubmit} 
          className="btn  btn-outline-primary loginbtn"
          >
          Login
        </button>
        <h5>Login ID is :  Sahana@123 </h5>

        {/* <div className="message" style={(props.log === false ? {display:"none"} : {display:"block"})} >Login ID incorrect!</div> */}
            </div>

        {/* Home Butt on Displays when we enter the Correct Pin */}

        <Link
         to="/"
          style={(props.log === true && localStorage.getItem("log") !==false) ? { display: "block" } : { display: "none" }}
          className="btn btn-outline-primary btn-lg "
        >
          Home
        </Link>

        {/* <Footer/> */}



        {/* <input type="number" className='otp-input'  name="" id="otp-1" />
        <input type="number" className='otp-input'  name="" id="otp-2" />
        <input type="number" className='otp-input'  name="" id="otp-3" />
        <input type="number" className='otp-input'  name="" id="otp-4" />
        <input type="number" className='otp-input'  name="" id="otp-5" />
        <input type="number"  className='otp-input' name="" id="otp-6" /> */}

        {/* </div> */}
      </div>
    </div>
  );
}

