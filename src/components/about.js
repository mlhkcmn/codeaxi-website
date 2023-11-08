import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export const About = (props) => {
  return (
    <>
      <Container id='about' maxWidth="none" className="aboutContainer">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container spacing={2}>
                <Grid item>
                  <Typography className="aboutTitle1">
                    Hakkımızda
                    <hr />
                  </Typography>
                  <Typography className="aboutText1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography className="aboutTitle2">
                    Neden bizi seçmelisiniz?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <center>
                <img src="/img/about.jpg" className="imageResponsive" alt="" />
              </center>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
