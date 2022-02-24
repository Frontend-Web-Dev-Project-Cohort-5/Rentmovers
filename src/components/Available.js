import React from "react";
import Ikoyirm from "../media/Ikoyirm.png";

function Available() {
  return (
    <>
      <div className="mt-3">
        <h3 className="text-center">
          We are available in many Locations in Lagos
        </h3>
        <div className="row">
          <div className="col">
            <img src={Ikoyirm} alt="IKOYI" />
          </div>
          <div className="col">
            <img src="" alt="VI" />
          </div>
          <div className="col">
            <img src="" alt="LEKKI" />
          </div>
          <div className="col">
            <img src="" alt="AJAH" />
          </div>
        </div>
      </div>

      {/* <Availablecard /> */}
    </>
  );
}

// function Availablecard() {
//   return <></>;
// }

export default Available;
