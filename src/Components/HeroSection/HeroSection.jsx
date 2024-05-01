import styles from './HeroSection.module.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";
import myPhoto from '../../assets/myPhoto.jpg'
import Tilt from 'react-parallax-tilt'


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
              <span> <a href="https://www.facebook.com/Giuran/" target="_blank"><FaFacebook /></a> </span>
              <span> <a href="https://discord.com/channels/giuran.radu#5167" target="_blank"><FaDiscord /></a> </span>
              <span> <a href="https://wa.me/+40722751363" target="_blank">< FaWhatsapp /></a> </span>
            </div>
          </div>
        </div>
      </Tilt>

      <div className={styles['laptop-div']}>
        <div className={styles['three-dots']}>
          <span className=''>a</span>
          <span>a</span>
          <span>a</span>
        </div>
        <div className={styles['laptop-screen']}>
          <div>
            <p> &gt; Radu.currentLocation</p>
            <span>&#34;Ramnicu Valcea, RO&#34;</span>
          </div>

          <div>
            <p> &gt; Radu.contactInfo</p>
            <span>[ &#34;giuran.radu@yahoo.com&#34; , &#34;0722 751 363&#34; ]</span>
          </div>

          <div>
            <p> &gt; Radu.interests</p>
            <span>[ &#34;coding&#34; , &#34;football&#34; ,  &#34;computer science&#34; , &#34;technology&#34; ]</span>
          </div>

          <div>
            <p> &gt; Radu.frontendSkills</p>
            <span>[ &#34;Html&#34; , &#34;Css&#34; ,  &#34;Sass&#34; , &#34;Tailwind &#34; , &#34;Javascript&#34; ,  &#34;TypeScript&#34; , &#34;Angular&#34; , &#34;RxJS&#34; , &#34;React&#34; ,  &#34;Redux&#34;] </span>
          </div>

          <div>
            <p> &gt; Radu.backendSkills</p>
            <span>[ &#34;Node.js&#34; , &#34;Express.js&#34; ,  &#34;MongoDB&#34; ,  &#34;Git&#34; , &#34;Firebase&#34; , &#34;Cloudinary&#34;]</span>
          </div>

          <div className={styles['flicker']}>
            <span>|</span>
          </div>

        </div>
      </div>


    </div>
  )
}

export default HeroSection
