import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../assets/images/profile.png';

export const HeroSection=()=>{
  return(
    <div className='container'>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col col-sm-12 col-md-6">
          <h1>Hi, Javaria here!</h1>
          <h3>Software Developer</h3>
        </div>
        <div className="col col-sm-12 col-md-6">
          <img src={Profile} alt="Profile"/>
        </div>
        
      </div>

    </div>
  )
};
