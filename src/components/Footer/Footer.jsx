import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className="footer__container">

    <ul className="permalinks" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1400'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#services">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1600'>
      <a href="https://www.linkedin.com/in/adeyinkaadelua/"><BsLinkedin/></a>
      <a href="https://github.com/AdeyinkaAdelua?tab=repositories"><FaGithub/></a>
      <a href="https://www.instagram.com/y_inxs_/"><BsInstagram/></a>

    
  
    </div>

    <div className="footer__copyright" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1800'>
      <small>&copy; Adeyinka Adelua. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer