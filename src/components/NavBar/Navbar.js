import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div class="container">
      <NavLink to="/" className="navbar-brand fw-bold fs-4">
        Maaloum
      </NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
            <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div class ="buttons">
            <NavLink className ="btn btn-outline-info me-2" to="/login">
            <i class="fa fa-sign-in me-1"></i>
            Login</NavLink>
            <NavLink className="btn btn-outline-info me-2" to="/register">
            <i class="fa fa-user-plus me-1"></i>
            register</NavLink>
            <NavLink className="btn btn-outline-info me-2" to="/cart">
            <i class="fa fa-cart-arrow-down me-1"></i>
            Cart (0) </NavLink>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
