import styles from './DashBoard.module.css';
import NavBar from '../NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import SkillsSections from '../SkillsSection/SkillsSections';
import ContactMe from '../ContactMe/ContactMe';

function DashBoard() {

  return (
    <>
      <NavBar />
      <div className={styles['dashboard-container']}>
        <section id="section1" className={styles.section1}>
          <HeroSection />
        </section>
        <section id="section2" className={styles.section2}>
          <ProjectsSection />
        </section>
        <section id="section3" className={styles.section3}>
          <SkillsSections />
        </section>
        <section id="section4" className={styles.section4}>
          <ContactMe />
          {/* <img src={blob_pic} alt="" /> */}

        </section>
      </div>
    </>
  );
}

export default DashBoard;
