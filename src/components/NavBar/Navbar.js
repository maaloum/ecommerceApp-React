import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="/">
      Shope_In
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Products</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
            </li>
        </ul>
        <div class ="buttons">
            <button class="btn btn-outline-dark me-2" type="submit">
            <i class="fa fa-sign-in me-1"></i>
            Login</button>
            <button class="btn btn-outline-dark me-2" type="submit">
            <i class="fa fa-user-plus me-1"></i>
            register</button>
            <button class="btn btn-outline-dark me-2" type="submit">
            <i class="fa fa-cart-arrow-down me-1"></i>
            Cart (0) </button>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
