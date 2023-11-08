import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
// import contactPNG from '../../assets/contact.png';
// import { Link } from 'react-scroll';
import menu from '../../Assets/Hamburger_icon.svg.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        {/* <img src={logo} alt="Logo" className='logo' /> */}
        <div className="desktopMenu">
          
            <a href='/' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Home</a>
          
          
            <a href='/skills' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Skills</a>
          
          
            {/* <a href='/works'  className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Works</a> */}
          
          
            <a href='/WeatherApp' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >WeatherApp</a>
            <a href='/QuizApp' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >QuizApp</a>
          
          
            <a href='/Contact' className="desktopMenuListItem"  spy={true} smooth={true} offset={-100} duration={500} >Contact</a>
          


            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Clients</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Games</Link> */}
        </div>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          
            <a href='/' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Home</a>
          
          
            <a href='/skills' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Skills</a>
          
          
            {/* <a href='/works'  className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >Works</a> */}
          
          
            <a href='/WeatherApp' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >WeatherApp</a>
            <a href='/QuizApp' className="desktopMenuListItem" spy={true} smooth={true} offset={-100} duration={500} >QuizApp</a>
          
          
            <a href='/Contact' className="desktopMenuListItem"  spy={true} smooth={true} offset={-100} duration={500} >Contact</a>
          


            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Clients</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Games</Link> */}
        </div>
        {/* <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactPNG} alt="" className="desktopMenuImg" /> Contact Me </button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> */}
        {/* <div className="navMenu"style={{display: showMenu? 'flex':'none'}}> */}
            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Games</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link> */}
            
            {/* <a href='/' className="navmenuitem" spy={true} smooth={true} offset={-100} duration={500} >Home</a>

            <a href='/skills' className="navmenuitem" spy={true} smooth={true} offset={-100} duration={500} >Skills</a>
          
          
            <a href='/WeatherApp' className="navmenuitem" spy={true} smooth={true} offset={-100} duration={500} >WeatherApp</a> */}

            {/* <a href='/works' className="navmenuitem"  spy={true} smooth={true} offset={-100} duration={500} >Works</a> */}
          
          
            {/* <a href='/Contact' className="navmenuitem"  spy={true} smooth={true} offset={-100} duration={500} >Contact</a> */}
        
        
    </nav>
  )
}

export default Navbar;