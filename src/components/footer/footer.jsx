import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='foot'>

<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"/><i class="bi bi-instagram" ></i> </li>
      <li class="ms-3"><a class="text-muted" href="#"/><i class="bi bi-twitter" ></i> </li>
        
        
        <li class="ms-3"><a class="text-muted" href="#"/><i class="bi bi-facebook" ></i> </li>
        
        
    </ul>
  </footer>
    </div>
  )
}
