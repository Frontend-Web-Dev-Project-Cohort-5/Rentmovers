import Ikoyirm from "../media/Ikoyirm.png";
import Virm from "../media/virm.png";
import lekkirm from "../media/lekkirm.png";
import ajahrm from "../media/ajahrm.png";

function Available() {
  return (
    <>
      <div className="p-3 mt-3">
        <h3 className="text-center pb-5">
          We are available in many Locations in Lagos
        </h3>
        <div className="row p-3">
          <div className="col card text-dark">
            <img src={Ikoyirm} className="card-img" alt="IKOYI" />
            <div className="card-img-overlay">
              <h5 className="card-title text-center ">IKOYI</h5>
            </div>
          </div>

          <div className="col card text-dark">
            <img src={Virm} className="card-img" alt="VI" />
            <div className="card-img-overlay">
              <h5 className="card-title text-center ">VI</h5>
            </div>
          </div>

          <div className="col card text-dark">
            <img src={lekkirm} className="card-img" alt="LEKKI" />
            <div className="card-img-overlay">
              <h5 className="card-title text-center ">LEKKI</h5>
            </div>
          </div>

          <div className="col card text-dark">
            <img src={ajahrm} className="card-img" alt="AJAH" />
            <div className="card-img-overlay">
              <h5 className="card-title text-center ">AJAH</h5>
            </div>
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
