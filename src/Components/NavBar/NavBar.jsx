import './NavBar.css'
import { Link } from 'react-scroll'

const Navbar = () => {


  return (
    <div className='header'>
      <nav className='navbar'>

        <ul className="nav-menu">
          <li className='nav-item'>
            <Link to="section1" spy={true} smooth={true} offset={-70} duration={1000}>Info</Link>
          </li>
          <li className='nav-item'>
            <Link to="section2" spy={true} smooth={true} offset={-70} duration={1000}>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to="section3" spy={true} smooth={true} offset={-70} duration={1000}>Skills</Link>
          </li>
          <li className='nav-item'>
            <Link to="section4" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar