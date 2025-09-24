import './NavBar.css'
import { Link } from 'react-scroll'
import my_logo_pic from '../../assets/my-logo.png'

const Navbar = () => {


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
          <li className='nav-item'>
            <Link to="section2" spy={true} smooth={true} offset={-68} duration={1000}>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to="section3" spy={true} smooth={true} offset={-66} duration={1000}>Skills</Link>
          </li>
          <li className='nav-item'>
            <Link to="section4" spy={true} smooth={true} offset={-66} duration={1000}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar