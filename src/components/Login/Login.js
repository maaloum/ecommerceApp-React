import React from 'react'

export default function Login() {
  return (
            <form className = 'my-4 py-4 justify-content-center'>
                <div class="mb-3 my-4 px-4">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 px-4">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-outline-info px-2 mx-4">Login</button>
        </form>
  )
}
