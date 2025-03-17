import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>What are my skills?</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>My Skills</h2>


      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-right" data-aos-anchor=".experience__container"  data-aos-duration="900">
        <h3>Frontend Development</h3>
            <div className="experience__content">
              {/* HTML  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* CSS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* JavaScript  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              {/* React  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Tailwind 
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Jquery  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Jquery</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article> */}
            </div>
        </div>

        {/* BACKEND sKILLS */}
      
        <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Backend Development</h3>
            <div className="experience__content">
              {/* Node JS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* Express.js */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Express.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/*PHP */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              {/* RESTful APIs  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>RESTful APIs</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

            
            </div>
        </div>


        <div className="experence__cloud" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Database Management</h3>
            <div className="experience__content">
              {/* SQL (MySQL, PostgreSQL)  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>SQL (MySQL, PostgreSQL) </h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* NoSQL (MongoDB, Firebase) */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>NoSQL (MongoDB, Firebase)</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Database Design  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Database Design</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              {/* Data Security */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Data Security</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

            
            </div>
        </div>




        <div className="experence__data" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Data Analysis & Visualization</h3>
            <div className="experience__content">
              {/* Python (Pandas, NumPy)  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Python (Pandas, NumPy) </h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

               {/* Excel (Pivot Tables, VLOOKUP)  */}
               <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Excel (Pivot Tables, VLOOKUP) </h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* R   */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>R </h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

             
              
              {/* Data Visualization (Matplotlib, Tableau, Power BI)  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Data Visualization (Matplotlib, Tableau, Power BI)</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

            
            </div>
        </div>




      </div>
    </section>
  )
}

export default Experience