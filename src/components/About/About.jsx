import React from 'react'
import './about.scss'
import { FaAward, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Svg icons
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <section id='about'>
      <h5 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='900'>Unlock the mysteries of me</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>About me</h2>
{/* 
      <div className="container about__container">
      <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container"  data-aos-duration="500">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
     
        <div className="about__content">
           <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
            Welcome to my developer portfolio! I'm a passionate full-stack developer who recently graduated in May 2024 and is eagerly seeking full-time opportunities to contribute my skills and expertise to innovative projects.
           </p>

           <p>
             My journey into the world of software development began with a curiosity to understand how technology shapes our world and a drive to create meaningful solutions. Throughout my education, I've honed my skills in both front-end and back-end development, ensuring that I can bring a holistic approach to any project I undertake.
           </p>

           <p >
             Beyond coding, I have a diverse range of interests that keep me balanced and inspired. When I'm not immersed in lines of code, you'll often find me indulging in my love for crochet, creating intricate patterns and designs that mirror the creativity and attention to detail I bring to my development projects. Additionally, I'm an avid reader, constantly seeking new knowledge and perspectives to broaden my understanding of the world.
           </p>

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane/></a>
        </div>


    </section>
  )
}

export default About