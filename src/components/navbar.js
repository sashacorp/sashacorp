import * as React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'gatsby'



const NavBar = () => {
    return (
      <Container className="navbar">
          <Row>
           <Col><Link to="/"> <h2>Home Page </h2> </Link></Col>
        </Row>
      </Container>
    )
}

export default NavBar