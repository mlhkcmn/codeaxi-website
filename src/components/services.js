import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { MessagesSquare } from 'lucide-react';

export const Services = (props) => {
  return (
    <>
      <Container id='services' maxWidth="none" className="servicesContainer">
        <Container maxWidth="lg">
          <Grid container spacing={8} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className="servicesTitle">
                Our Services
                <hr />
              </Typography>
            </Grid>
            <Grid item container xs={12} textAlign="center" spacing={5} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="servicesIcon" />
                </Typography>
                <Typography className="servicesText1">
                  Lorem ipsum
                </Typography>
                <Typography className="servicesText2">
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
