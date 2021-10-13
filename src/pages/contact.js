import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";
import Nav from "../components/Menu";

const contactPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Nav></Nav>
        <Header as="h1">Contact Us!</Header>
        <Form>
          <Form.Field>
            <Input placeholder="Enter your full name..."></Input>
          </Form.Field>
          <Form.Field>
            <Input placeholder="Enter the best email to contact you with..."></Input>
          </Form.Field>
          <Form.Field>
            <TextArea placeholder="Enter your message..."></TextArea>
          </Form.Field>
          <Button color="green">Send Message</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default contactPage;
