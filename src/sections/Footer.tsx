import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import './Footer.css'
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer>
    <p>
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
    
    <div>
      <IconButton color="primary">
        <Facebook />
      </IconButton>
      <IconButton color="primary">
        <Twitter />
      </IconButton>
      <IconButton color="primary">
        <Instagram />
      </IconButton>
    </div>
  </footer>
  )
}

export default Footer