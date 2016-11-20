import * as React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class Header extends React.Component<any, any> {
  public render() {

    let htmlProps = {activeClassName: 'active', onlyActiveOnIndex: true};

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Over-Reactor</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer {...htmlProps} to="/"><NavItem>Home</NavItem></IndexLinkContainer>
          <LinkContainer {...htmlProps} to="about"><NavItem>About</NavItem></LinkContainer>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <LinkContainer {...htmlProps} tabIndex={-1} to="counter"><NavItem>Counter</NavItem></LinkContainer>
            <LinkContainer {...htmlProps} tabIndex={-1} to="stars"><NavItem>Stars</NavItem></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export { Header }
