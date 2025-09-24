import styles from './HeroSection.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import myPhoto from '../../assets/myPhoto.jpg'
import Tilt from 'react-parallax-tilt'

import resume from '../../assets/Radu Giuran CV.pdf'


function HeroSection() {

  return (
    <div className={styles['hero-container']}>
      <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5}>
        <div className={styles['hero-div']} >
          <div className={styles['photo-div']}>
            <img src={myPhoto} alt="my photo" />
          </div>
          <div className={styles['description']}>
            <h3> <FaRegHandPeace />  Hello, I&apos;m Radu. I&apos;m a Full-Stack Developer</h3>
            <h2> Passionate | Organized | Analytical</h2>
            <h3>Check out my projects below</h3>
            <div className={styles['platforms-div']}>
              <span> <a href="https://github.com/GiuranRadu" target="_blank"><FaGithub /></a> </span>
              <span> <a href="https://www.linkedin.com/in/radu-giuran-38246419b/" target="_blank"><FaLinkedin /></a></span>
              <span> <a href="https://wa.me/+40722751363" target="_blank">< FaWhatsapp /></a> </span>
              <span> <a href="https://discord.com/channels/giuran.radu#5167" target="_blank"><FaDiscord /></a> </span>
              <span> <a href={resume} download='cv-giuran-radu' ><TbFileCv /></a> </span>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5}>

        <div className={styles['laptop-div']}>
          <div className={styles['three-dots']}>
            <span className=''>a</span>
            <span>a</span>
            <span>a</span>
          </div>
          <div className={styles['laptop-screen']}>
            <div>
              <p> &gt; Radu.currentLocation</p>
              <span>&#34;Bucharest, RO&#34;</span>
            </div>

            <div>
              <p> &gt; Radu.contactInfo</p>
              <span>[ &#34;giuran.radu@yahoo.com&#34; , &#34;0722 751 363&#34; ]</span>
            </div>


            <div>
              <p> &gt; Radu.frontendSkills</p>
              <span>[&#34;React&#34; , &#34;Redux Toolkit&#34; , &#34;Angular&#34; , &#34;JavaScript&#34; ,  &#34;TypeScript&#34; ,  &#34;HTML&#34; , &#34;CSS&#34; ,  &#34;Bootstrap&#34; , &#34;Tailwind &#34;  ] </span>
            </div>

            <div>
              <p> &gt; Radu.backendSkills</p>
              <span>[ &#34;Node.js&#34; , &#34;Express.js&#34; ,  &#34;PHP + Smarty&#34;]</span>
            </div>

            <div>
              <p> &gt; Radu.databases</p>
              <span>[ &#34;MongoDB&#34; , &#34;MySQL&#34; , &#34;Firebase&#34;]</span>
            </div>
            <div>
              <p> &gt; tooling & versioning & others</p>
              <span>[ &#34;Git&#34; , &#34;Postman&#34;, &#34;Confluence&#34;, &#34;Jira&#34;, &#34;PrestaShop&#34;] </span>
            </div>
            <div>
              <p> &gt; Radu.interests</p>
              <span>[ &#34;coding&#34; , &#34;football&#34; ,  &#34;computer science&#34; , &#34;technology&#34; ]</span>
            </div>
            <div className={styles['flicker']}>
              <span>|</span>
            </div>

          </div>
        </div>
      </Tilt>



    </div>
  )
}

export default HeroSection
