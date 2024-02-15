import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [ 
    { 
      name : "SimpleTask",
      deployedLink: "https://adeyinkaadelua.github.io/SimpleTask/",
      image: require('../../assets/SimpleTask.png'),
      fadeDuration:'1000',
      description:  "A task management application that allows users to create, edit, and delete tasks. Users can categorize tasks as school or personal, and data is saved locally.",
      toolsUsed: ['HTML/CSS','JavaScript',]
    
    },
    {
      name: "SheSaidIt",
      deployedLink: " ",
      image: require('../../assets/SheSaidIt.png'),
      description: "SheSaidIt is a Reddit spin-off committed to building a safe and inclusive online space for women to openly discuss mental health, tech aspirations, and wellness. Our goal is to foster empowerment, collaboration, and positive community change.",
      fadeDuration: "1100",
      toolsUsed: ['React','MongoDb','TypeScript']
    },
    {
      name : "TicTacToe",
      deployedLink: "https://adeyinkaadelua.github.io/TicTacToe/",
      image: require('../../assets/tictactoe.png'),
      fadeDuration:'1200',
      description:"This interactive web application allows you to challenge an AI bot in strategic battles. Built using HTML, CSS, and JavaScript, the game showcases my front-end development skills. Check out the GitHub repository for the source code and play the game live on the website.",
      toolsUsed: ['HTML/CSS','JavaScript']
    },
    {
      name:"QuizApp",
      deployedLink: "https://adeyinkaadelua.github.io/QuizApp/",
      image: require('../../assets/Quiz.png'),
      fadeDuration:'1300',
      description:"Designed and implemented a dynamic Quiz App using HTML, CSS, and JavaScript. The app features an interactive timer, challenging users to answer questions within a set time frame. Additionally, it incorporates a point system, rewarding users based on the accuracy and speed of their responses.",
      toolsUsed: ['HTML/CSS','JavaScript']
    },
    {
      name: "Behavioral Health Facility Database ",
      deployedLink: "https://github.com/AdeyinkaAdelua/Behavioral-Health-Facility-Database-Model-using-Java-Swing-",
      image: require('../../assets/FutureHope.png'),
      fadeDuration:'1400',
      description: "Designed a comprehensive Behavioral Health Facility Database Model. Utilizing the Java Swing framework and NetBeans IDE, I crafted an intuitive user interface that enables seamless data entry, viewing, and updates for patient information within the behavioral health facility",
      toolsUsed: ['Java','mySQl','Eclipse','Express','Bootstrap','sequelize']
    },
    
    {
      name:"BookBreeze",
      deployedLink:"https://adeyinkaadelua.github.io/BookBreeze/",
      image: require('../../assets/BookBreeze.png'),
      fadeDuration:'1500',
      description:"A Progressive web application that allows users discover books from various genres, including romance, science fiction, thriller, comedy, and historical fiction. Simply choose a genre, click 'Generate,' and uncover intriguing book suggestions.",
      toolsUsed: ['HTML/CSS','JavaScript']
    }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };




  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink,description,toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
               className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/AdeyinkaAdelua/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>

         {isModalOpen && (<Modal
           closeModal={handleClick}
           project={selectedProject}
         />)}
    </section>
  )
}

export default Portfolio