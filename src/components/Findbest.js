// import React from "react";
import findbest from "../media/findbest.jpg";

function Findbest() {
  return (
    <>
      <div className="card text-dark mt-4 mb-4 mx-5">
        <img
          src={findbest}
          className="card-img rounded"
          alt="find best image"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Find the best Real Estate</h5>
          <p className="card-text">
            We provide a complete service for the rental of real estate.
          </p>
          <button className="btn btn-outline-success" type="submit">
            FIND US
          </button>
        </div>
      </div>
    </>
  );
}

export default Findbest;
