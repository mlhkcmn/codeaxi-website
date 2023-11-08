import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Menu, Container, MenuItem, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <center>
      <AppBar position="fixed" className="header">
        <Container maxWidth="xl">
          <Toolbar>

            {/* Mobil Header Started */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }}}>
              <Link to="features" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Features</MenuItem></Link>
              <Link to="about" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>About</MenuItem></Link>
              <Link to="services" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Services</MenuItem></Link>
              <Link to="team" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Gallery</MenuItem></Link>
              <Link to="contact" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Contact</MenuItem></Link>
              </Menu>
            </Box>
            <Typography variant="h5" noWrap sx={{ display: { xs: 'flex', md: 'none' }, opacity: '1', fontSize: '20px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', float: 'left' }}>
              {"<Code/>Axi"}
            </Typography>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
              <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon sx={{width: '30px', height: '30px'}} />
              </IconButton>
            </Box>
            {/* Mobil Header Finished */}

            {/* PC Header Started */}
            <Typography variant="h6" noWrap component="a" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize: '20px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textTransform: 'uppercase'}}>
            {"<Code/>Axi Software"}
            </Typography>
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', fontFamily: 'Poppins' }}>
              <Link to="features" offset={-130} spy={true} smooth={true} duration={500}><Button className="headerButton">Features</Button></Link>
              <Link to="about" offset={-130} spy={true} smooth={true} duration={500}><Button className="headerButton">About</Button></Link>
              <Link to="services" spy={true} smooth={true} duration={500}><Button className="headerButton">Services</Button></Link>
              <Link to="team" spy={true} smooth={true} duration={500}><Button className="headerButton">Team</Button></Link>
              <Link to="contact" offset={-130} spy={true} smooth={true} duration={500}><Button className="headerButton">Contact</Button></Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </center>
  );
}
export default Navigation;