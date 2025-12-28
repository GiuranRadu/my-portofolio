import styles from './SkillsSections.module.css'
import html_logo from '../../assets/Tech logos/html2.png'
import css_logo from '../../assets/Tech logos/css.png'
import scss_logo from '../../assets/Tech logos/scss.png'
import tailwind_logo from '../../assets/Tech logos/tailwind.png'
import javascript_logo from '../../assets/Tech logos/javascript.png'
import typescript_logo from '../../assets/Tech logos/typescript.png'
import angular_logo from '../../assets/Tech logos/angular.png'
import react_logo from '../../assets/Tech logos/react.png'
import redux_logo from '../../assets/Tech logos/redux.png'

import nodeJs_logo from '../../assets/Tech logos/nodejs.png'
import expressJs_logo from '../../assets/Tech logos/expressJS.png'
import mongoDB_logo from '../../assets/Tech logos/mongodb-logo.png'
import firebase_logo from '../../assets/Tech logos/firebase.png'

import git_logo from '../../assets/Tech logos/git.png'
import postman_logo from '../../assets/Tech logos/postman.webp'
import my_sql from '../../assets/Tech logos/mySql.png'
import python_logo from '../../assets/Tech logos/python.png'
import django_drf_logo from '../../assets/Tech logos/django-drf.png'
import docker_logo from '../../assets/Tech logos/docker.png'
import jira_logo from '../../assets/Tech logos/jira.png'

import { RevealLeft, RevealRight } from '../../Utils/Reveal'


const frontendLogos = [
  { pic: html_logo, name: "Html" },
  { pic: css_logo, name: "Css" },
  { pic: scss_logo, name: "Scss" },
  { pic: javascript_logo, name: "Javascript" },
  { pic: typescript_logo, name: "TypeScript" },
  { pic: angular_logo, name: "Angular" },
  { pic: react_logo, name: "React" },
  { pic: redux_logo, name: "Redux" },
  { pic: tailwind_logo, name: "Tailwind" },
]

const backendLogos = [
  { pic: python_logo, name: "Python" },
  { pic: django_drf_logo, name: "Django" },
  { pic: my_sql, name: "MySQL" },
  { pic: nodeJs_logo, name: "NodeJs" },
  { pic: expressJs_logo, name: "ExpressJs" },
  { pic: mongoDB_logo, name: "MongoDB" },
]

const toolsLogos = [
  { pic: git_logo, name: "Git" },
  { pic: docker_logo, name: "Docker" },
  { pic: postman_logo, name: "Postman" },
  { pic: firebase_logo, name: "Firebase" },
  { pic: jira_logo, name: "Jira" },

]


function SkillsSections() {

  return (
    <div className={styles['skills-container']}>
      <h1>Skills</h1>

      <RevealRight>
        <div className={styles['skills-section']}>
          <h1>Frontend</h1>
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
        <div className={styles['skills-section']}>
          <h1>Backend</h1>
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

      <RevealRight>
        <div className={styles['skills-section']}>
          <h1>Tools</h1>
          <div>
            {toolsLogos.map((skill, i) => (
              <div key={i} className={styles['skill']}>
                <img src={skill.pic} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealRight>
    </div>
  )
}

export default SkillsSections


// ! https://www.youtube.com/watch?v=hjbxaYTMhy0


// ! https://www.framer.com/motion/scroll-animations/   ->>>  Scroll-triggered animations


