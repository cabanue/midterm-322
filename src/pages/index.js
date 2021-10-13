import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Segment, Header, Button } from "semantic-ui-react";
import Nav from "../components/menu.js";

const homePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Nav></Nav>
        <Segment textAlign="center">
          <Header as="h1">Home</Header>
          <p>Some random text that needs not readen</p>
          <Button color="green">Join Now!</Button>
        </Segment>
        <Header as="h3">News</Header>
        <p>Some more random text</p>
      </Container>
    </React.Fragment>
  );
};

export default homePage;
