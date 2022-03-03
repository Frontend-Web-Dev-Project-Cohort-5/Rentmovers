import React from 'react';
import Findbest from '../components/Findbest';

import bensoncj from '../media/bensoncjcropped.png';

import reoUndaunted from '../media/reoUndaunted.png';

import ayomidePic from '../media/ayomideAy.png';

function About() {
  return (
    <>
      <Findbest />

      <div className="container p-4">
        <h3 className="text-center mt-4 mb-4">About RentMovers</h3>
        <p className="text-center mt-4 mb-4">
          RentMovers is a web-app that connects homeowners to their prospective
          tenants and vice versa without the hassle of going through agents and
          moving from house to house before making their final decision.
        </p>
        <div className="text-center bg-primary">
          <p>
            When you are looking for a rental property, you will find that there
            are hundreds of housing companies and thousands of private
            landlords, who are renting out properties. But where do you find all
            these landlords and contacts? How do you know whether they have an
            available rental which suits your needs? How do you stay updated
            whenever new rentals come to the market? At RentMovers we collect
            almost all available rental properties in one search. So it is easy
            for you to find exactly what matches your criterias and get a new
            home faster. As a result of that, we save you a lot of time in your
            housing search. Easy and simple.
          </p>
        </div>
        <h3 className="text-center">Meet The Team</h3>
        <div className="row">
          <div className="col">
            <div>
              <img src={bensoncj} alt="benson-pic" />
            </div>
            <div>
              <h2>Lorem ipsum dolor</h2>

              <a href="https://githib.com/">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https:/twitter.com/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </strong>
          </div>

          <div className="col">
            <div>
              <img src={reoUndaunted} alt="Ralph aka Reo Undaunted" />
            </div>
            <div>
              <h2>Engr. Raphael E.O</h2>

              <a href="https://githib.com/ReoUndaunted">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/raphaelovonlen">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://twitter.com/reoundaunted">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <strong>
              Digital Marketer with demonstrable expertise in Digital Tools and
              Assets Management, Online Branding, Product Development, UX/UI,
              and apt entry-level experience in Frontend Engineering.
            </strong>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <img src={ayomidePic} alt="ayomide-pic" />
            </div>
            <div>
              <h2>Engr. Ajayi Ayomide</h2>

              <a href="https://githib.com/">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https:/twitter.com/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <strong>
              A Frontend engineer with strong interest in UI/UX Design and
              website responsiveness, with tools like Figma, Sass, Bootsrap,
              Javascript, React, etc.
            </strong>
          </div>

          <div className="col">
            <div>
              <img src="" alt="banjo-pic" />
            </div>
            <div>
              <h2>Lorem ipsum dolor</h2>

              <a href="https://githib.com/">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https:/twitter.com/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </strong>
          </div>

          <div className="col">
            <div>
              <img src="" alt="emmanuel-pic" />
            </div>
            <div>
              <h2>Lorem ipsum dolor</h2>

              <a href="https://githib.com/">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https:/twitter.com/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
