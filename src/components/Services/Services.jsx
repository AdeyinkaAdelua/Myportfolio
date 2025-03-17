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
            <h3>Web Developer </h3>
            <h3>Beachley Medical</h3>
            <h4 style={{ marginLeft: '90px' }}>  September 2024 - Present</h4>
          </div>

          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Oversaw various e-commerce operations, including creating apparel items, updating shipping records, and managing user profiles across multiple platforms.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Developed and maintained online catalogs and websites, leveraging expertise in HTML, CSS, and advanced e-commerce tools.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Created and edited visual assets using Adobe Illustrator, Photoshop, and Acrobat to enhance product presentations and marketing materials.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Streamlined workflows by implementing catalog groupings, user profile updates, and new website creation to improve customer experience.</p>
             </li>
             
          </ul>
        </article>

        {/* WEB DEVELOPER */}

        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
          <h3>Software engineer Intern </h3>
            <h3>Greentree Capital</h3>
            <h4 style={{ marginLeft: '95px' }}>  August 2023 - April 2024</h4>
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

        {/* SOFTWARE ENGINEER INTERN */}


        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
          <h3>Computer Inventory Technician </h3>
            <h3>Daly Computers</h3>
            <h4 style={{ marginLeft: '90px' }}>  June 2023  - August  2023</h4>
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



          {/* COMPUTER INVENTORY TECH */}






      </div>
    </section>
  )
}

export default Services