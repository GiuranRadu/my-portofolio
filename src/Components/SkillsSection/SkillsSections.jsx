import styles from './SkillsSections.module.css'
import html_logo from '../../assets/Tech logos/html2.png'
import css_logo from '../../assets/Tech logos/css.png'
import scss_logo from '../../assets/Tech logos/scss.png'
import tailwind_logo from '../../assets/Tech logos/tailwind.png'
import javascript_logo from '../../assets/Tech logos/javascript.png'
import typescript_logo from '../../assets/Tech logos/typescript.png'
import angular_logo from '../../assets/Tech logos/angular.png'
import react_logo from '../../assets/Tech logos/react.png'
import react_router_logo from '../../assets/Tech logos/react-router.png'
import redux_logo from '../../assets/Tech logos/redux.png'
import rxjs_logo from '../../assets/Tech logos/rxjs.png'

import nodeJs_logo from '../../assets/Tech logos/nodejs.png'
import expressJs_logo from '../../assets/Tech logos/expressJS.png'
import mongoDB_logo from '../../assets/Tech logos/mongodb-logo.png'
import firebase_logo from '../../assets/Tech logos/firebase.png'
import cloudinary_logo from '../../assets/Tech logos/cloudinary.png'
import git_logo from '../../assets/Tech logos/git.png'
import postman_logo from '../../assets/Tech logos/postman.webp'

import { RevealLeft, RevealRight } from '../../Utils/Reveal'


const frontendLogos = [
  { pic: html_logo, name: "Html" },
  { pic: css_logo, name: "Css" },
  { pic: javascript_logo, name: "Javascript" },
  { pic: scss_logo, name: "Scss" },
  { pic: tailwind_logo, name: "Tailwind" },
  { pic: angular_logo, name: "Angular" },
  { pic: rxjs_logo, name: "RxJs" },
  { pic: typescript_logo, name: "TypeScript" },
  { pic: react_logo, name: "React" },
  { pic: react_router_logo, name: "React Router" },
  { pic: redux_logo, name: "Redux" }
]

const backendLogos = [
  { pic: nodeJs_logo, name: "NodeJs" },
  { pic: expressJs_logo, name: "ExpressJs" },
  { pic: mongoDB_logo, name: "MongoDB" },
  { pic: postman_logo, name: "Postman" },
  { pic: firebase_logo, name: "Firebase" },
  { pic: cloudinary_logo, name: "Cloudinary" },
  { pic: git_logo, name: "Git" },
]


function SkillsSections() {

  return (
    <div className={styles['skills-container']}>
      <h1>Skills</h1>

      <RevealRight>
        <div className={styles['frontend-skills']}>
          <h1>Frontend Skills</h1>
          <div>
            {frontendLogos.map((skill, i) => (
              <div key={i} className={styles['skill']}>
                <img src={skill.pic} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealRight>

      <RevealLeft>
        <div className={styles['backend-skills']}>
          <h1>Backend Skills</h1>
          <div>
            {backendLogos.map((skill, i) => (
              <div key={i} className={styles['skill']}>
                <img src={skill.pic} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealLeft>
    </div>
  )
}

export default SkillsSections


// ! https://www.youtube.com/watch?v=hjbxaYTMhy0


// ! https://www.framer.com/motion/scroll-animations/   ->>>  Scroll-triggered animations


