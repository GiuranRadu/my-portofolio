import styles from './ProjectsSection.module.css'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import ur_physique_pc_pic from '../../assets/Ur-Physique mockups/ur-physique-front.png'
import ur_physique_phone_pic from '../../assets/Ur-Physique mockups/ur-physique-portrait.png'
import f1_pc_pic from '../../assets/F1 mockup/localhost_4200_register-front.png'
import f1_phone_pic from '../../assets/F1 mockup/localhost_4200_(Samsung S22)-portrait.png'
import z_animals_pc_pic from '../../assets/Z-Animals mockups/z-animals-front.png'
import z_animals_phone_pic from '../../assets/Z-Animals mockups/z-animals-portrait.png'
import x_games_pc_pic from '../../assets/X-Games mockups/x-games-front.png'
import x_games_phone_pic from '../../assets/X-Games mockups/x-games-portrait.png'
import react_logo from '../../assets/react3.png'
import angular_logo from '../../assets/angular1.png'

function ProjectsSection() {

  function openUrPhysique() {
    window.open('https://github.com/GiuranRadu/UR-Physique-Frontend', '_blank');
    window.open('https://github.com/GiuranRadu/UR-Physique-Backend', '_blank');
  }

  function openF1() {
    window.open('https://github.com/GiuranRadu/Formula1-Frontend', '_blank');
    window.open('https://github.com/GiuranRadu/Formula1-Backend', '_blank');
  }

  function openZAnimals() {
    window.open('https://github.com/GiuranRadu/Z-Animals-Frontend', '_blank');
    window.open('https://github.com/GiuranRadu/Z-Animals-Backend', '_blank');
  }

  function openXGames() {
    window.open('https://github.com/GiuranRadu/X-Games-Frontend', '_blank');
    window.open('https://github.com/GiuranRadu/X-Games-Backend', '_blank');
  }

  return (
    <div className={styles['projects-div']}>
      <h1>Projects  </h1>

      <div className={styles['project']}>
        <img src={react_logo} alt="react logo" className={styles['tech-logo-img']} />
        <p className={styles['email-and-pass']}>Credentials for testing purposes <span>guest@mail.com</span> <span>guest123#</span></p>

        <div className={styles['pc-image-div']}>
          <img src={ur_physique_pc_pic} alt="" />
        </div>

        <div className={styles['project-description-div']}>
          <h1>Ur-Physique</h1>
          <p>An app that allows you to keep track of your sporting life, including the calories you burn. You can also upload photos of your activities. Feel free to register or try the given credentials below ↓ </p>
          <div className={styles['technologies-used-div']}>
            <div className={styles['frontend-tech']}>
              <span>Html</span>
              <span>Css Module</span>
              <span>Javascript</span>
              <span>ReactJS</span>
            </div>
            <div className={styles['backend-tech']}>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>MongoDB</span>
            </div>

          </div>
          <div className={styles['buttons-div']}>
            <button className={styles['live-demo-btn']}> <a href="https://ur-physique.netlify.app/" target="_blank">Live Demo <FaExternalLinkAlt /></a> </button>
            <button className={styles['view-source-btn']} onClick={openUrPhysique}>View Source <FaGithub /></button>
          </div>
        </div>

        <div className={styles['phone-image-div']}>
          <img src={ur_physique_phone_pic} alt="" />
        </div>
      </div>


      <div className={styles['project']}>
        <img src={angular_logo} alt="react logo" className={styles['tech-logo-img']} />
        <p className={styles['email-and-pass']}>Regular user <span>guest@mail.com</span> <span>guest123#</span> ----
          Admin <span>admin@mail.com</span> <span>admin123#</span></p>

        <div className={styles['pc-image-div']}>
          <img src={f1_pc_pic} alt="" />
        </div>
        <div className={styles['project-description-div']}>
          <h1>Formula 1</h1>
          <p>This app is designed for F1 pilots. You can register and select circuits you&apos;ve participated in. Keep track of your completion time, and at the end, see who is the best! Feel free to register or try the given credentials below ↓ </p>
          <div className={styles['technologies-used-div']}>
            <div className={styles['frontend-tech']}>
              <span>Html</span>
              <span>Css</span>
              <span>TypeScript</span>
              <span>Angular</span>
            </div>
            <div className={styles['backend-tech']}>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles['buttons-div']}>
            <button className={styles['live-demo-btn']}> <a href="https://formula1-radu.netlify.app/" target="_blank">Live Demo <FaExternalLinkAlt /></a> </button>
            <button className={styles['view-source-btn']} onClick={openF1}>View Source <FaGithub /></button>
          </div>
        </div>

        <div className={styles['phone-image-div']}>
          <img src={f1_phone_pic} alt="" />
        </div>
      </div>

      <div className={styles['project']}>
        <img src={react_logo} alt="react logo" className={styles['tech-logo-img']} />
        <div className={styles['pc-image-div']}>
          <img src={z_animals_pc_pic} alt="" />
        </div>

        <div className={styles['project-description-div']}>
          <h1>Z-Animals</h1>
          <p>This app is for people who love nature, animals, and all kinds of habitats. It&apos;s also linked to an external API that loads more information about the animal you are curious about.</p>
          <div className={styles['technologies-used-div']}>
            <div className={styles['frontend-tech']}>
              <span>Html</span>
              <span>Css Module</span>
              <span>Javascript</span>
              <span>ReactJS</span>
            </div>
            <div className={styles['backend-tech']}>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles['buttons-div']}>
            <button className={styles['live-demo-btn']}> <a href="https://z-animals.netlify.app/" target="_blank">Live Demo <FaExternalLinkAlt /></a> </button>
            <button className={styles['view-source-btn']} onClick={openZAnimals}>View Source <FaGithub /></button>
          </div>
        </div>

        <div className={styles['phone-image-div']}>
          <img src={z_animals_phone_pic} alt="" />
        </div>
      </div>


      <div className={styles['project']}>
        <img src={angular_logo} alt="react logo" className={styles['tech-logo-img']} />
        <p className={styles['email-and-pass']}>Credentials for testing purposes <span>guest@mail.com</span> <span>guest123#</span></p>
        <div className={styles['pc-image-div']}>
          <img src={x_games_pc_pic} alt="" />
        </div>
        <div className={styles['project-description-div']}>
          <h1>X-Games</h1>
          <p>Browse through our extensive catalog featuring the latest releases as well as timeless favorites. You can add to cart, add to favorites, create orders, and select payment methods, then send the order to a Database. Feel free to register or try the given credentials below ↓ </p>
          <div className={styles['technologies-used-div']}>
            <div className={styles['frontend-tech']}>
              <span>Html</span>
              <span>Scss</span>
              <span>TypeScript</span>
              <span>Angular</span>
            </div>
            <div className={styles['backend-tech']}>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles['buttons-div']}>
            <button className={styles['live-demo-btn']}> <a href="https://x-games.netlify.app/" target="_blank">Live Demo <FaExternalLinkAlt /></a> </button>
            <button className={styles['view-source-btn']} onClick={openXGames}>View Source <FaGithub /></button>
          </div>
        </div>

        <div className={styles['phone-image-div']}>
          <img src={x_games_phone_pic} alt="" />
        </div>
      </div>


    </div>

  )
}

export default ProjectsSection
