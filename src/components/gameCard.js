import React from "react";
import "semantic-ui-css/semantic.css";
import { Card, Rating, Icon, Container } from "semantic-ui-react";

const gameCard = ({ game, description, rating }) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>{game}</Card.Header>
          <Card.Meta>
            <span>{description}</span>
          </Card.Meta>
          <Rating icon="star" defaultRating={rating} maxRating={5} />
          <Icon name="exclamation"></Icon>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default gameCard;
