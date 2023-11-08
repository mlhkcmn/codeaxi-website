import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Team = (props) => {
  return (
    <>
      <Container id='team' maxWidth="lg" className="teamContainer">
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className="teamTitle">
              TEAM
              <hr />
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="teamText1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </Typography>
          </Grid>
          <Grid item container direction="row">
            {props.data
              ? props.data.map((d, i) => (
                <Grid item xs={12} sm={6} md={3}>
                  <center>
                    <div key={`${d.name}-${i}`}>
                      <img src={d.img} alt="..." />
                    </div>
                    <Typography className="teamImgText1">
                      {d.name}
                    </Typography>
                    <Typography className="teamImgText2">
                      {d.job}
                    </Typography>
                  </center>
                </Grid>
              ))
              : "loading"}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
