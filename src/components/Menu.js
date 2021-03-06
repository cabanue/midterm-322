import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <React.Fragment>
      <Menu>
        <Link to="/">
          <Menu.Item>
            <Icon name="home" size="large"></Icon>
          </Menu.Item>
        </Link>
        <Link to="/games">
          <Menu.Item>
            <Icon name="game" size="large"></Icon>
          </Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item>
            <Icon name="group" size="large"></Icon>
          </Menu.Item>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
