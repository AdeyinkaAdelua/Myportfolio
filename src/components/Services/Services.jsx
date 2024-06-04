import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>My career Journey</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>My Experience</h2>
      
      <div className="container services__container">
        <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Technology Apprentice </h3>
            <h3>NAB Leadership Foundation</h3>
            <h4 style={{ marginLeft: '40px' }}>  Oct 2023 -   April 2024</h4>
          </div>

          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Participated in workshops and training sessions to enhance skills in areas such as broadcast engineering, signal processing, and multimedia production.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Stayed abreast of industry standards and best practices, incorporating the latest advancements in technology to optimize broadcasting processes.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Facilitated knowledge-sharing sessions within the team, fostering a culture of continuous learning and skill development.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Actively engaged in troubleshooting and problem-solving activities to address technical challenges in broadcasting operations.</p>
             </li>
             
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
          <h3>Software engineer Intern </h3>
            <h3>Greentree Capital</h3>
            <h4 style={{ marginLeft: '40px' }}>  Aug 2023 - April 2024</h4>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Spearheaded the creation of visually appealing and intuitive user interfaces using HTML, CSS, and JavaScript, ensuring a seamless and engaging user experience.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Implemented responsive design principles to optimize the platform's layout for various screen sizes, fostering accessibility and usability.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Developed dynamic and interactive features using JavaScript, enhancing user engagement and interactivity on the platform.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Conducted extensive cross-browser testing to guarantee a consistent and reliable user experience across different web browsers.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Implemented smooth transitions and animations to enhance the overall user interface, providing a polished and modern feel.</p>
            </li>
            
          </ul>
        </article>

        {/* End of web development  */}


        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
          <h3>Computer Inventory Technician </h3>
            <h3>Daly Computers</h3>
            <h4 style={{ marginLeft: '40px' }}>  June 2023  - Aug  2023</h4>
          </div>

          <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Conducted thorough and efficient on-site surveys, employing attention to detail to accurately assess and inventory a wide range of technology equipment.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Collaborated with school staff and IT administrators to address technology-related concerns and ensure smooth inventory processes.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Utilized inventory management systems to track equipment movements, minimizing discrepancies and optimizing asset tracking.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Provided technical support and assistance to end-users during the inventory process, fostering positive relationships with clients.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Implemented improvements to the inventory process, resulting in increased efficiency and a more streamlined workflow.</p>
              </li>
              
            </ul>
          </article>

          {/* End of digital marketting  */}



      </div>
    </section>
  )
}

export default Services