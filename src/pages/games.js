import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Card, Rating, Icon, Grid } from "semantic-ui-react";
import Nav from "../components/Menu";
import Game from "../components/gameCard";

const gamesPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Nav></Nav>
        <Header as="h1">Games</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width="5">
              <Game
                game="Tic-Tac-Toe"
                description="3 in a row"
                rating={2}
              ></Game>
            </Grid.Column>
            <Grid.Column width="5">
              <Game
                game="Checkers"
                description="Jumping Race"
                rating={3}
              ></Game>
            </Grid.Column>
            <Grid.Column width="5">
              <Game
                game="Snakes and Ladders"
                description="Snake!"
                rating={4}
              ></Game>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Game
                game="Yahtzee"
                description="Feeling Lucky?"
                rating={5}
              ></Game>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default gamesPage;
