import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';


import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-aos="fade-down" data-aos-duration="1500"  href="https://www.linkedin.com/in/adeyinkaadelua/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/AdeyinkaAdelua?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a data-aos="fade-down" data-aos-duration="1200" href="https://www.instagram.com/y_inxs_/" target="_blank" rel="noreferrer"><BsInstagram/></a>
       
 
    </div>
    )
}

export default HeaderSocials