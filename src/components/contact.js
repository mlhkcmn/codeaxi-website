import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const initialState = {
  name: "",
  phone: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, message);
    emailjs
      .sendForm("service_3z58w7p", "template_cr7ei87", e.target, "fdUh2GFMHbB6zqrc0")
      .then(
        (result) => {
          console.log(result.text);
          clearState();

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Fragment>
        <Container id='contact' maxWidth="none" className="contactContainer">
          <Container>
            <Grid container direction="row">
              <Grid item container xs={12} md={9}>
                <Grid item xs={10}>
                  <Typography className="contactTitle">
                    BIZE ULASIN
                    <Divider className="contactDivider" />
                  </Typography>
                  <Typography className="contactText1">
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                  <Grid item container direction="row" spacing={4}>
                    <Grid item xs={12} md={5}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="contactInput"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="contactInput"
                        placeholder="Phone Number"
                        required
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <textarea
                        name="message"
                        id="message"
                        className="contactInput"
                        rows="4"
                        placeholder="Message"
                        required
                        onChange={handleChange}
                      ></textarea>
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" className="contactButton">
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <Typography className="contactInfo">
                    Contact info
                  </Typography>
                  <Typography className="contactInfoTitle">
                    <Phone /> Phone
                  </Typography>
                  <Typography className="contactInfoText">
                    +90 535 517 42 91
                  </Typography>
                  <Typography className="contactInfoTitle">
                    <Email /> Email
                  </Typography>
                  <Typography className="contactInfoText">
                    info@codeaxi.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Fragment>
    </>
  );
};
