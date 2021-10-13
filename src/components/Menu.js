import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <Link to="index">
            <Icon name="home" size="large"></Icon>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Icon name="game" size="large"></Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name="group" size="large"></Icon>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
