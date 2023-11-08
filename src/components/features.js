import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { MessagesSquare } from 'lucide-react';

export const Features = () => {
  return (
    <>
      <Container id='features' maxWidth="none" className="featuresContainer">
        <Container maxWidth="lg">
          <Grid container spacing={8} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className="featuresTitle">
                Features
                <hr />
              </Typography>
            </Grid>
            <Grid item container xs={12} textAlign="center" spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6} md={3}>
                <Typography>
                  <MessagesSquare className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Lorem ipsum
                </Typography>
                <Typography className="featuresText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <MessagesSquare className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Lorem ipsum
                </Typography>
                <Typography className="featuresText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <MessagesSquare className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Lorem ipsum
                </Typography>
                <Typography className="featuresText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <MessagesSquare className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Lorem ipsum
                </Typography>
                <Typography className="featuresText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
