import { useEffect, useRef, useState } from 'react'
import styles from './WorkExperience.module.css'

import SECRET_CODE_LOGO from '../../assets/secretcode_logo.jpg'
import NEWTECH_LOGO from '../../assets/newtech_logo.jpg'
import HUNTING_LOGO from '../../assets/huntingstore_logo.jpg'

// Hook simplu pentru vizibilitate
function useInView(threshold = 0.99) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold])

  return [ref, isVisible]
}

const WorkExperience = () => {
  const [ref1, visible1] = useInView()
  const [ref2, visible2] = useInView()
  const [ref3, visible3] = useInView()

  return (
    <div className={styles['section-container']}>
      <h1>Work experience</h1>
      <div className="max-width-container">
        <div className={styles['work-experience-container']}>



          {/* CARD 1 */}
          <div className={styles['work-card']} ref={ref3}>
            <div className={styles['work-card--item']}>
              <div className={styles['work-card--item--content']}>
                <div className={styles['arrow-head']}></div>
                <h3><em>Full-Stack Developer & Web Administrator</em></h3>
                <hr />
                <h4 className={styles['employer-title']}>Hunting Store (SC Poli Gun SRL)</h4>
                <ul className={styles['job-bullets']}>
                  <li>
                    In my role as a <strong><em>PrestaShop Developer</em></strong>, I developed backend automation with PHP scripts and scheduled cron jobs to synchronize product stock and pricing information with external suppliers.
                  </li>
                  <li>
                    Developed custom modules from scratch, integrated them into the platform, and adapted functionalities to business needs.
                  </li>
                  <li>
                    Collaborated with marketing and management teams to define scalable e-commerce
                    solutions and deploy new features in alignment with business needs.
                  </li>
                  <li>
                    Built automation scripts to synchronize supplier prices and stock, and managed database operations such as bulk updates, price adjustments, and partner exports.
                  </li>
                  <li>
                    Improved the store’s UI using CSS and Bootstrap, resolved technical issues, scheduled tasks with cron jobs, and optimized on-site SEO and paid campaigns to increase visibility and sales.
                  </li>
                  <li>
                    <strong>Technologies:</strong> PHP, Smarty, Bootstrap, MySQL, GMC, PrestaShop
                  </li>
                </ul>
                <h4 className={styles['years-range-mobile']}>January 2025 - Present</h4>

              </div>
            </div>
            <div className={`${styles['employer-logo-container']} ${visible3 ? styles.active : ''}`}>
              <img src={HUNTING_LOGO} alt="Hunting Store logo" />
            </div>
            <div className={styles['years-range']}>
              <h2>January 2025 - Present</h2>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles['work-card']} ref={ref2}>
            <div className={styles['work-card--item']}>
              <div className={styles['work-card--item--content']}>
                <div className={styles['arrow-head']}></div>
                <h3><em>Full-Stack Developer  &nbsp; | &nbsp; IT Trainer Assistant</em></h3>
                <hr />
                <h4 className={styles['employer-title']}>NewTech Academy</h4>
                <ul className={styles['job-bullets']}>
                  <li>Developed full-stack web applications using Angular, Node.js, MongoDB, RxJS, and Firebase.</li>
                  <li>
                    In my role as a <strong><em>Trainer Assistant</em></strong>, I was responsible for assigning tasks to students, guiding them through solutions, and managing our GitHub repository.
                  </li>
                  <li>
                    Assisted in reviewing assignments and guided students in building their full-stack project portfolios.
                  </li>
                  <li>
                    My teaching method is focused on a practical approach to both frontend and backend concepts and making each topic as understandable as possible.
                  </li>
                  <li>
                    <strong>Technologies:</strong> JavaScript, TypeScript, HTML, CSS, React, Angular, Node.js, MongoDB, Firebase, Python, Django REST Framework, MySQL
                  </li>
                </ul>
                <h4 className={styles['years-range-mobile']}>October 2023 - Present</h4>

              </div>
            </div>
            <div className={`${styles['employer-logo-container']} ${visible2 ? styles.active : ''}`}>
              <img src={NEWTECH_LOGO} alt="NewTech Academy logo" />
            </div>
            <div className={styles['years-range']}>
              <h2>October 2023 - Present</h2>
            </div>
          </div>


          {/* CARD 3 */}
          <div className={styles['work-card']} ref={ref1}>
            <div className={styles['work-card--item']}>
              <div className={styles['work-card--item--content']}>
                <div className={styles['arrow-head']}></div>
                <h3><em>Frontend Developer</em></h3>
                <hr />
                <h4 className={styles['employer-title']}>Secret Code</h4>
                <ul className={styles['job-bullets']}>
                  <li>
                    As a <strong><em>Frontend Developer</em></strong> at SecretCode, I had the pleasure of working on several projects with different teams.
                  </li>
                  <li>
                    One of my main responsibilities was structuring and creating the interfaces for websites/applications where I worked on modularizing existing components, as well as integrating them with the backend.
                  </li>
                  <li>Collaborated with backend developers and QA engineers to ensure seamless data flow and quality through unit testing and Git-based workflows.
                  </li>
                  <li>
                    <strong>Technologies:</strong> AEM (Adobe Experience Manager), React, TypeScript, JavaScript, Firebase, Redux, Tailwind, MaterialUi, NodeJs, ExpressJs, MongoDB, Jira, Confluence
                  </li>
                </ul>
                <h4 className={styles['years-range-mobile']}>May 2024 - January 2025</h4>

              </div>
            </div>
            <div className={`${styles['employer-logo-container']} ${visible1 ? styles.active : ''}`}>
              <img src={SECRET_CODE_LOGO} alt="Secret Code logo" />
            </div>
            <div className={styles['years-range']}>
              <h2>May 2024 - January 2025</h2>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default WorkExperience
