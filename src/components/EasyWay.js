// import React from "react";
import easyway from '../media/heroimg.png';

function EasyWay() {
  return (
    <>
      <div className="card text-dark mt-4 mb-4 mx-5" style={{ border: 'none' }}>
        <img src={easyway} className="card-img rounded" alt="find best" />
        <div className="card-img-overlay">
          <h1 className="cardTitle">
            <strong>
              Easy way to find a <br /> perfect property
            </strong>
          </h1>
          <p className="cardTitlePara">
            We provide a complete service for the sale, <br />
            purchase or rental of real estate.
          </p>
          {/* <button className="btn btn-outline-success" type="submit">
            FIND US
          </button> */}
        </div>
      </div>
    </>
  );
}

export default EasyWay;
