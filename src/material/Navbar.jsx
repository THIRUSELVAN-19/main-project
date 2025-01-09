import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { setIsOpen(!isOpen); };
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    
  }

  return (
    <nav className="navbar">
      <div className="container">  
        

      {/* <button className="menu-btn" onClick={toggleMenu}> 
        ☰ 
      </button> 
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}> 
        <button className="close-btn" onClick={toggleMenu}>
          ×
        </button> 
        <ul> 
          <li>
            <a href="#home">Home</a>
          </li> 
          <li>
            <a href="#about">About</a>
          </li> 
          <li>
            <a href="#services">Services</a>
          </li> 
          <li>
            <a href="#contact">Contact</a>
          </li> 
        </ul>
        </div> */}




         
        <div className="logo">
          <div className="CN">
          SRI GOWARI
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Journey">Journey</NavLink>
            </li>
            <li>
              <NavLink to="/Ourteam">Ourteam</NavLink>
            </li>
            <li>
              <NavLink to="/Career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar