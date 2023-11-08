import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

export const HeroSlider = () => {
  return (
    <>
      <Container maxWidth="none" className="herosliderContainer">
        <Container maxWidth="md">
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Typography className="herosliderText1" sx={{ fontSize: { xs: "60px", md: "82px"}}}>Landing Page</Typography>
            </Grid>
            <Grid item xs="4">
              <Typography className="herosliderText2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
              </Typography>
            </Grid>
            <Grid item xs="6">
              <Button href="#contact" className="herosliderButton">
                Sorularınızı İletiniz
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
