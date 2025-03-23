import React from 'react'
import "./Header.css";
import { Drawer, IconButton } from '@mui/material';
import { Close, Menu } from "@mui/icons-material";
const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <header>
        <nav>
          <div>
            <h1 className='logo'>Test</h1>
          </div>
          {/* Desktop Nav */}
          <div className='DeskNav'>
            <ul className='navLinks'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
          </div>
            {/* Mobile Nav */}
        <div className='MobileNav'>
            <IconButton className="menu-button" onClick={()=> setMenuOpen(true)}>
                <Menu/>
            </IconButton>
        <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <div className="drawer-content">
          <IconButton className="close-button" onClick={() => setMenuOpen(false)}>
            <Close />
          </IconButton>
          <ul className='navLinks'>
            <li>
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
          <a href="#" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
          </div>
         </Drawer>
         </div>
        </nav>
    </header>
  )
}

export default Header