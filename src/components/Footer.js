import React from 'react';
import '../sass/App.css';
import Logo from '../media/Rmlogo1.png';
import Newsletter from './Newsletter signup';

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
          <div id="FooterIcons" style={{ icon: 'black' }}>
            <a href="https://facebook.com">
              <i className="bi bi-facebook" style={{ color: 'blue' }}></i>
            </a>
            <a href="https://twitter.com">
              <i className="bi bi-twitter" style={{ color: 'skyblue' }}></i>
            </a>

            <a href="https://instagram.com">
              <i className="bi bi-instagram" style={{ color: 'red' }}></i>
            </a>
            <a href="https://linkedin.com">
              <i className="bi bi-linkedin" style={{ color: 'navyblue' }}></i>
            </a>
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
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: 'black' }}
                >
                  Features
                </a>
              </td>
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/about"
                  style={{ color: 'black' }}
                >
                  About Us
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: 'black' }}
                >
                  Partners
                </a>
              </td>
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: 'black' }}
                >
                  Agents
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: 'black' }}
                >
                  Support
                </a>
              </td>
              <td>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: 'black' }}
                >
                  Contact Us
                </a>
              </td>
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
                    <Newsletter />
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
