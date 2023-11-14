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
                    Firmamız, teknolojik çözümlerle iş dünyasını dönüştürme vizyonuyla kurulmuş bir yazılım şirketidir.
                    Codeaxi Software, 2021 yılında kurulmuş olup, müşterilerimize özel ve yenilikçi yazılım çözümleri sunma amacını taşımaktadır.
                  </Typography>
                  <Typography className="aboutTitle2">
                    Misyonumuz
                  </Typography>
                  <Typography className="aboutText1">
                    Müşterilerimizin ihtiyaçlarına odaklanarak, kaliteli ve ölçeklenebilir yazılım çözümleri geliştirmek; 
                    iş süreçlerinin optimize etmek ve rekabet avantajı sağlamak. 
                  </Typography>
                  <Typography className="aboutTitle2">
                    Vizyonumuz
                  </Typography>
                  <Typography className="aboutText1">
                    Teknolojiyi kullanarak, müşterilerimizin geleceğe güvenle bakmalarını sağlamak;
                    inovasyon ve mükemmeliyeti birleştirerek sektörde öncü bir konuma gelmek.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <br />
              <br />
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
