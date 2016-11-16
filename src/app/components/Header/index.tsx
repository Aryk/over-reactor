import * as React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component<any, any> {
  public render() {

    let htmlProps = {activeClassName: 'active', onlyActiveOnIndex: true};

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Over-Reactor</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <li role="presentation"><Link {...htmlProps} to="/">Home</Link></li>
          <li role="presentation"><Link {...htmlProps} to="about">About</Link></li>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <li role="menuitem"><Link {...htmlProps} tabIndex={-1} to="counter">Counter</Link></li>
            <li role="menuitem"><Link {...htmlProps} tabIndex={-1} to="stars">Stars</Link></li>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export { Header }
