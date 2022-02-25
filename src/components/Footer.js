import React from "react";
import "../sass/App.css";

const Footer = () => {
  return (
    
    <footer id="FooterComponent"
    className="row justify-content-center">
      <div>
        <div className="row align-items-start">          
        <div className="col">
          <img src="../logo.svg" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, id
            incidunt. Iusto suscipit aliquid eos, voluptates et ut blanditiis
            nesciunt, expedita esse, eius minus perferendis corporis nam.
            Necessitatibus, exercitationem aspernatur.
          </p>
        </div>
        <table className="col">
          
            <thead>
            <tr>
            <th>
              header1
            </th>
            <th>
              header2
            </th>
              </tr>
            </thead>


            <tbody>
              <tr>
                <td>
                  Hi
                </td>
                <td>
                  Hello
                </td>
                </tr>
              <tr>
                <td>
                  Hi2
                </td>
                <td>
                  Hello2
                </td>
                </tr>
              <tr>
                <td>
                  Hi3
                </td>
                <td>
                  Hello3
                </td>
                </tr>
              </tbody>
          </table>
      
        <div className="col">
            <table>
              <thead>
                <tr>
                  <th>
                    Signin
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    search
                  </td>
                </tr>
              </tbody>
         </table>
            
        </div>
        </div>
        </div>
        </footer>
    
  );
};

export default Footer;
