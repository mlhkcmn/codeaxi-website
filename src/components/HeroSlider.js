import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

export const HeroSlider = () => {
  return (
    <>
      <Container maxWidth="none" className="herosliderContainer">
        <Container maxWidth="md">
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Typography className="herosliderText1" sx={{ fontSize: { xs: "42px", sm: "82px"}}}>{'<code/>axi'}</Typography>
            </Grid>
            <Grid item xs="4">
              <Typography sx={{ fontSize: { xs: "15px", sm: "22px"}}} className="herosliderText2">
                Sorunlara kodlanmıs çözümler.
              </Typography>
            </Grid>
            <Grid item xs="6">
              <Button sx={{ fontSize: { xs: "14px", sm: "16px"}}} href="#contact" className="herosliderButton">
                İletişime Geçiniz
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
