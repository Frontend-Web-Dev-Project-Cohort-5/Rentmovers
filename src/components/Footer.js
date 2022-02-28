import React from 'react';
import '../sass/App.css';
import Logo from '../media/Rmlogo1.png';

const Footer = () => {
  return (
    <footer id="FooterMain" className="row justify-content-center">
      <div id="FooterSubMain">
        <div className="col-3" id="FooterCol1">
          <img src={Logo} alt="RentMovers" />
          <p className="pFT">
            RentMovers is a web-app that connects homeowners to their
            prospective tenants and vice-versa without the hassle of going
            through agents, and moving from house to house before making their
            final decision.
          </p>
          <div id="FooterIcons">
            <i className="bi bi-facebook" href="https://facebook.com"></i>
            <i className="bi bi-twitter" href="https://twitter.com"></i>
            <i className="bi bi-instagram" href="https://instagram.com"></i>
            <i className="bi bi-linkedin" href="https://linkedin.com"></i>
          </div>
          <p> &copy; 2022. All rights reserved</p>
        </div>
        <table className="col-6" id="FooterCol2">
          <thead>
            <tr>
              <th>Take a tour</th>
              <th>Our Company</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Features</td>
              <td>About Us</td>
            </tr>
            <tr>
              <td>Partners</td>
              <td>Agents</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Contact Us</td>
            </tr>
          </tbody>
        </table>

        <div className="col-3" id="FooterCol3">
          <table>
            <thead>
              <tr>
                <th>Subscribe</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="pFT">
                  Subscribe to get latest property blog news from us.
                </td>
              </tr>
              <tr>
                <td>
                  <form action="https://formspree.io/f/mpzbrwqv">
                    Email Address
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
