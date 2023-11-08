import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <>
      <Container id='gallery' maxWidth="lg" className="galleryContainer">
        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className="galleryTitle">
              Galeri
              <hr />
            </Typography>
          </Grid>
          <Grid item container direction="row" columnSpacing={1}>
            {props.data
              ? props.data.map((d, i) => (
                <Grid item xs={12} sm={6} md={4}
                  key={`${d.title}-${i}`}
                >
                  <center>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </center>
                </Grid>
              ))
              : "Loading..."}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
