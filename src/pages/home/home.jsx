import React from "react";
import Topbar from "../../components/topbar/topbar";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import "./home.css"

export default function Home(props) {
  return (
    <div>
      {/* <Topbar/> */}

      <Navbar log={props.log} setlog={props.setlog} />

      <div className="container">
        <h1 className="intro text-center ">Welcome back to the website</h1>

        <h3 className="my-3 text-center">
          This is a admin portal which keep tracks of the employees work and
          details
        </h3>

        {/* alert */}

        
      </div>
      <div
          class="alert alert-info my-4 alert-dismissible fade show"
          role="alert"
        >
          <strong>You could visit our</strong>{" "}
          <Link to="/dashboard" className="alert-link">
            Dashboard
          </Link>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="alert alert-info my-4 alert-dismissible fade show"
          role="alert"
        >
          <strong>You could visit our</strong>{" "}
          <Link to="/employee" className="alert-link">
            Employee-List
          </Link>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div className="container h3">
            This is a happy community and we are a good and fastly developing group.
        </div>
        
    </div>
  );
}
