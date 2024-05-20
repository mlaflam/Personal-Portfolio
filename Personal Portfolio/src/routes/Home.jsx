import React from 'react';
import Navbar from '../components/Navbar';
import photo from '../assets/professional-photo.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className='home-page'> 
        <div className='home-info'>
          <div className='info-hello'>Hello I'm</div>
          <div className='info-name'>Margaret Laflam</div>
          <div className='info-career'>Software Engineer</div>
          <div className='info-blurb'> I study Computer Science at the University of Virignia.
            While there I have gained experience creating websites that blend functionality with user engagement.
            If you need someone to create the website exactly as you imagine, then <Link className='home-link' to={'/contact'}>contact me</Link>!
          </div>

        </div>

        <div className='home-picture'>
          <img className="photo" src={photo} alt="photo" />
        </div>
      
      </div>
    </>
  )
}

export default Home