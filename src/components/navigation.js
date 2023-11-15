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
              <Link to="features" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Hizmetler</MenuItem></Link>
              <Link to="about" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Hakkımızda</MenuItem></Link>
              <Link to="why" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>Deneyim</MenuItem></Link>
              <Link to="contact" spy={true} smooth={true} duration={500}><MenuItem className="headerMenuItem" component="a" href="" onClick={handleCloseNavMenu}>İletişim</MenuItem></Link>
              </Menu>
            </Box>
            <Typography component="a" href="/" variant="h5" className="navbarTitle" noWrap sx={{ display: { xs: 'flex', md: 'none' }, opacity: '1', fontSize: '20px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', float: 'left' }}>
              {"<code/>axi"}
            </Typography>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
              <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon sx={{width: '30px', height: '30px'}} />
              </IconButton>
            </Box>
            {/* Mobil Header Finished */}

            {/* PC Header Started */}
            <Typography href="/" variant="h6" className="navbarTitle" noWrap component="a" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize: '20px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit'}}>
             {"<code/>axi"}
            </Typography>
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', fontFamily: 'Poppins' }}>
              <Link to="features" offset={-80} spy={true} smooth={true} duration={500}><Button className="headerButton">Hizmetler</Button></Link>
              <Link to="about" offset={-70} spy={true} smooth={true} duration={500}><Button className="headerButton">Hakkımızda</Button></Link>
              <Link to="why" spy={true} smooth={true} duration={500}><Button className="headerButton">Deneyim</Button></Link>
              <Link to="contact" offset={-130} spy={true} smooth={true} duration={500}><Button className="headerButton">İletişim</Button></Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </center>
  );
}
export default Navigation;