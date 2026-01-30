import './NavBar.css'
import { Link } from 'react-scroll'
import my_logo_pic from '../../assets/my-logo.png'
import { FiMenu, FiInfo ,FiBriefcase, FiCpu, FiMail} from "react-icons/fi";
import { useEffect, useRef, useState } from 'react';


const Navbar = () => {

  const [showSidemenu, setShowSideMenu] = useState(false)

  const hamburgerRef = useRef(null)
  const sideMenuRef = useRef(null)

  function toggleSideMenu(e) {
    setShowSideMenu(el => !el)
    const hamburgerIcon = e.currentTarget
    hamburgerIcon.classList.add("scaleUp")
    setTimeout(() => {
      hamburgerIcon.classList.remove("scaleUp")
    }, 1000)
  }

  function handleClickOutside(e) {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(e.target) &&
      !hamburgerRef.current.contains(e.target)
    ) {
      setShowSideMenu(false);
    }
  }


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    touchEndX.current = e.changedTouches[0].clientX;

    const diff = touchEndX.current - touchStartX.current;

    if (diff > 80) {
      setShowSideMenu(false);
    }
  }




  console.log(showSidemenu)

  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='logo-div'>
          <Link to="section1" spy={true} smooth={true} duration={1000}>
            <img src={my_logo_pic} alt="my logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className='nav-item'>
            <Link to="section1" spy={true} smooth={true} offset={-71} duration={1000}>Info</Link>
          </li>
          <li className='nav-item'>
            <Link to="section5" spy={true} smooth={true} offset={-71} duration={1000}>Experience</Link>
          </li>
          {/* <li className='nav-item'>
            <Link to="section2" spy={true} smooth={true} offset={-68} duration={1000}>Projects</Link>
          </li> */}
          <li className='nav-item'>
            <Link to="section3" spy={true} smooth={true} offset={-66} duration={1000}>Skills</Link>
          </li>
          <li className='nav-item'>
            <Link to="section4" spy={true} smooth={true} offset={-66} duration={1000}>Contact</Link>
          </li>
        </ul>
        <div className='nav-hamburger' ref={hamburgerRef} onClick={(e) => toggleSideMenu(e)} >
          <FiMenu size={36} />
        </div>
      </nav>

      <div className={`side-menu ${showSidemenu ? "active" : ""}`} ref={sideMenuRef} onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <li className='nav-item'>          
          <Link to="section1" spy={true} smooth={true} offset={-71} duration={1000}><FiInfo size={16}/> Info</Link>
        </li>
        <li className='nav-item'>
          <Link to="section5" spy={true} smooth={true} offset={-71} duration={1000}><FiBriefcase size={16}/>Experience</Link>
        </li>
        {/* <li className='nav-item'>
            <Link to="section2" spy={true} smooth={true} offset={-68} duration={1000}>Projects</Link>
          </li> */}
        <li className='nav-item'>
          <Link to="section3" spy={true} smooth={true} offset={-66} duration={1000}><FiCpu size={16}/> Skills</Link>
        </li>
        <li className='nav-item'>
          <Link to="section4" spy={true} smooth={true} offset={-66} duration={1000}><FiMail size={16}/>Contact</Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar