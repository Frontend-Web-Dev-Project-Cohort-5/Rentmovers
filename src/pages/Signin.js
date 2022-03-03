import React from 'react';
import Rmlogo1 from '../media/Rmlogo1.png';

function Signin() {
  return (
    <>
      <div className="row p-3">
        <div className="col p-5">
          <h4 className="text-center mt-5 mb-5">
            Do you have any vacant apartment for rentage? RentMovers will
            connect you with your clients.
          </h4>
          <br />
          <img
            className="mx-auto d-block mt-5"
            src={Rmlogo1}
            alt="rentmovers logo"
          />
        </div>

        <div className="col p-5">
          <h3 className="mb-5">Sign-in</h3>
          <br />
          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-center ">
            <button type="submit" className="btn btn-primary mt-3 mb-4">
              Sign-in
            </button>
          </div>
          <p className="text-center">Dont have an account? Sign-up here.</p>
        </div>
      </div>
    </>
  );
}

export default Signin;
