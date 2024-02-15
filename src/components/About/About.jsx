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
        </div>

        <div className="about__content">
           <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
           I am a passionate front-end developer on the brink of graduating in May 2024. I have a deep love for frontend development, and my journey in the tech world has equipped me with a robust technical background.
            </p>

            <p>
              When I'm not immersed in code, you'll find me indulging in my hobbies, such as crocheting and exploring the world of books. I am not just a developer; I am a creative enthusiast who enjoys playing various games, including crosswords, sudoku, word games, and even mastering the Rubik's Cube.
            </p>

            <p >
              Beyond coding, my diverse set of interests and hobbies reflects my multifaceted personality. I am proud of my Nigerian heritage, and it adds a unique perspective to my work and interactions. I approach challenges with determination and focus, making sure to excel in whatever I set my mind to. This mindset, coupled with my technical skills, positions me as a highly employable and adaptable individual.
            </p>

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About