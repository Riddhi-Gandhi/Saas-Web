import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobileHome from "../images/31.svg";
import apiHome from "../images/29.svg";
import webHome from "../images/32.svg";
import sourceHome from "../images/30.svg";
import "./home.css";
import logo from "../images/deepcytesLogo.png";
import jiggly from "../images/jigglyimage.png";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/web'); // Replace with your desired URL
  };
  const handleButtonClick1 = () => {
    navigate('/mobile'); // Replace with your desired URL for button 1
  };

  const handleButtonClick2 = () => {
    navigate('/api'); // Replace with your desired URL for button 2
  };

  const handleButtonClick3 = () => {
    navigate('/source'); // Replace with your desired URL for button 3
  };

// function Home() {
//   let token = localStorage.getItem("token");
//   const navigate = useNavigate();

  useEffect(() => {
    // Add your initialization logic if needed
  }, []);

  // const handleNavigation = (link) => {
  //   navigate(link);
  // };


  return (
    <div>
      <div id="grad1">
        <br />
        <br />
        <br />
        <br />
        <br />
       

<div className="image-and-text-container">
      
     

      {/* Text */}
      <div className="text-container">
      <h1 id="para">Embark on the future with </h1>
        <h1 id="para12">Deepcytes:</h1>
        <h2 className="para3">Safeguarding Your Cyber Presence</h2>
        <p className="p2">
        In a world where the digital horizon transform is in the blank of an eye, your 
        </p>
        <p className="p2">
        entire cyber presence is under a relentless siege . A new epoch in cybersecurity.
        </p>
        <p className="p2">has downed - and it’s a revolution that defies all expectations. Welcome to the</p>
        <p className="p2">universe of Deep sides, the forefront of technological safeguard against the</p>
        <p className="p2">ceaseless tide of cyber vulnerabilities</p> 
      </div>

      <img
          src={apiHome}
         
          className="cursor-pointer h-8"
          alt="Deepcytes"
          id="imagejiggly"
          style={{ width: '500px', height: '670px' , marginLeft: '20px'}}
        />
    </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <Element name="services">
        <h2 className="text-light" id="para5">
        VAPT ToolKit
        </h2>
        <p className="text-light pt-12 sm:pt-0 sm:pb-4" id="para6">
        A versatile and powerful set of tools designed for in-depth Vulnerability Assessment and Penetration Testing
        </p>

        <br />

        <div className="pageBody">
          <div className="container">
          
              <br /> 
              <br />
              
              
              <div className="card">
                <div className="imgBox">
                
                  <img src={webHome} alt="img1" id="imgabc" onClick={handleButtonClick}/>
                  
                </div>
                <div className="content">
                  <h2>Web</h2>
                  <p>
                  Strengthens web apps, detects vulnerabilities, ensures online platform security.     </p>             
                </div>
              </div>

              <div className="card">
                <div className="imgBox">
                  <img src={mobileHome} alt="img2" id="imgabc" onClick={handleButtonClick1}/>
                </div>
                <div className="content">
                  <h2>Mobile</h2>
                  <p>
                  Dedicated tools enhance mobile app security, pinpoint and mitigate vulnerabilities.                  </p>
                  
                </div>
              </div>

              <div className="card">
                <div className="imgBox">
                  <img src={apiHome} alt="img3" id="imgabc" onClick={handleButtonClick2}/>
                </div>
                <div className="content">
                  <h2>API</h2>
                  <p>
                  Specialized tools facilitate comprehensive API assessments, ensuring secure software integration                  </p>
                 
                </div>
              </div>

              <div className="card">
                <div className="imgBox">
                  <img src={sourceHome} alt="img4" id="imgabc" onClick={handleButtonClick3} />
                </div>
                <div className="content">
                  <h2>Source Code</h2>
                  <p>
Secures software core, analyzes and fortifies source code for robust defense.                  </p>
                  
                </div>
              </div>

              
           
          </div>
        </div>
      
        </Element>

<div className="image-and-text-container">
      
      <img
          src={jiggly}
          
          className="cursor-pointer h-8"
          alt="Deepcytes"
          id="imagejiggly"
          style={{ width: '850px', height: '670px' }}
        />

      {/* Text */}
      <div className="text-container">
      <p className="p8">
        As a cybersecurity company, we promise to be at 
        </p>
        <p className="p9">
        the forefront of the ever-changing threat        </p>
        <p className="p9">landscape, constantly updating and evolving our </p>
        <p className="p9">strategies to keep your digital assets secure.
</p>
        <p className="p9">Trust us to stay vigilant ind proactive in </p>
        <p className="p9">safeguarding your online presence.</p>
        <p className="p11"></p>

        <p className="p10">Really excited to get in touch with us?</p>
        <p className="p10">Send us an email at info@deepcytes.io</p>
        <p className="p10">Or followers at @deepcytes on Facebook and Instagram</p>
        <p className="p10">for updates and news</p>
      </div>
    </div>

      
      </div>
    </div>
  );
}

export default Home;
