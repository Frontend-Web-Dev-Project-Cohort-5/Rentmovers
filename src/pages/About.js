import React from 'react'
import Findbest from "../components/Findbest";
import twittericon from '../media/twittericon.png'
import githubicon from '../media/githubicon.png'
import linkedinicon from '../media/linkedinicon.png'
import bensoncj from "../media/bensoncj.png";

function About() {
  return (
    <>
    
    <Findbest />

    <div className='container p-4'>

      <h3 className='text-center mt-4 mb-4'>About RentMovers</h3>
      <p className='text-center mt-4 mb-4'>
        RentMovers is a web-app that connects homeowners to their prospective
        tenants and vice versa without the hassle of going through agents and
        moving from house to house before making their final decision.
      </p>
      <div className='text-center bg-primary rounded-pill'>
        <p>
          When you are looking for a rental property, you will find that there
          are hundreds of housing companies and thousands of private landlords,
          who are renting out properties. But where do you find all these
          landlords and contacts? How do you know whether they have an available
          rental which suits your needs? How do you stay updated whenever new
          rentals come to the market? At RentMovers we collect almost all
          available rental properties in one search. So it is easy for you to
          find exactly what matches your criterias and get a new home faster. As
          a result of that, we save you a lot of time in your housing search.
          Easy and simple.
        </p>
      </div>
      <h3 className='text-center'>Meet The Team</h3>
      <div className="row">
        <div className="col">
          <div>
            <img src={bensoncj} alt="benson-pic" />
          </div>
          <div>
            <img src={githubicon} alt="github" />
            <img src={linkedinicon} alt="linkedin" />
            <img src={twittericon} alt="twitter" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div className="col">
          <div>
            <img src="" alt="raph-pic" />
          </div>
          <div>
            <img src={githubicon} alt="github" />
            <img src={linkedinicon} alt="linkedin" />
            <img src={twittericon} alt="twitter" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div>
            <img src="" alt="ayomide-pic" />
          </div>
          <div>
            <img src={githubicon} alt="github" />
            <img src={linkedinicon} alt="linkedin" />
            <img src={twittericon} alt="twitter" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>

        <div className="col">
          <div>
            <img src="" alt="banjo-pic" />
          </div>
          <div>
            <img src={githubicon} alt="github" />
            <img src={linkedinicon} alt="linkedin" />
            <img src={twittericon} alt="twitter" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>

        <div className="col">
          <div>
            <img src="" alt="emmanuel-pic" />
          </div>
          <div>
            <img src={githubicon} alt="github" />
            <img src={linkedinicon} alt="linkedin" />
            <img src={twittericon} alt="twitter" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About
