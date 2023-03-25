import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className = "hero">
    <div class="card bg-white text-white border-0">
    <img src="/assets/bg.jpg" class="card-img" alt="Background" />
    <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div class="container">
            <h5 class="card-title display-3 fw-bolder mb-0 text-info">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2 text-info">CHECK OUT ALL THE TRANDS</p>
        </div>
    </div>
    </div>
    
    </div>
  )
}
