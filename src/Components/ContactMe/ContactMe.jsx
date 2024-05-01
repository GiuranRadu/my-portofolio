import styles from './ContactMe.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import pc_pic from '../../assets/hero3.jpeg'
import Tilt from 'react-parallax-tilt'


function ContactMe() {

  function goToWhatsapp() {
    window.open('https://wa.me/+40722751363', '_blank');

  }

  return (
    <div className={styles['contact-me-container']}>
      <h1>Contact Me</h1>
      <div className={styles['contact-details']}>
        <div className={styles['info-div']}>
          <div className={styles['info']}>
            <div className={styles['icon-div']}>
              <span>
                <MdOutlineEmail />
              </span>
            </div>
            <div className={styles['text-div']}>
              <h1>Email</h1>
              <p>giuran.radu@yahoo.com</p>
            </div>
          </div>

          <div className={styles['info']}>
            <div className={styles['icon-div']}>
              <span>
                <MdOutlineLocalPhone />
              </span>
            </div>
            <div className={styles['text-div']}>
              <h1>Phone</h1>
              <p>+40 722 751 363</p>
            </div>
          </div>


          <div className={styles['info']}>
            <div className={styles['icon-div']}>
              <span>
                <IoLogoWhatsapp />
              </span>
            </div>
            <div className={styles['text-div']}>
              <h1>Whatsapp</h1>
              <p onClick={goToWhatsapp} className={styles['go-to-whatsapp']}>Click me <FaExternalLinkAlt /></p>
            </div>
          </div>
        </div>


        <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10} className={styles['my-picture-container']}>
          <div>
            <img src={pc_pic} alt="pc picture" />
          </div>
        </Tilt>

      </div>

    </div>
  )
}

export default ContactMe
