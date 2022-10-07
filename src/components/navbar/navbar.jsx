import React from 'react'
import { Link,useNavigate ,Navigate } from 'react-router-dom'
import "./navbar.css"

export default function Navbar(props) {
    let navigate = useNavigate()

    function logout(){
        props.setlog(false)
        navigate("/login")
        localStorage.clear()
        // <Navigate to ="/login" />
    }
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top ">
  <div class="container-fluid">
    <Link class="navbar-brand p-3 logo " to = "/"> <i class="bi bi-people"></i> Admify.com</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/dashboard" >Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/employee" >Employee-list</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    <button className="btn btn-outline-dark text-white mx-3 logoutbtn"  onClick={logout}>

    <i class="bi bi-box-arrow-right text-white px-2 h4"></i>Log out
    </button>
  </div>
</nav>
    </div>
  )
}
