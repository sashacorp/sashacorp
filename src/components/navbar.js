import * as React from 'react'
import { Row } from 'react-grid-system';
import {Link} from 'gatsby'



const NavBar = () => {
    return (
      <nav className="navbar">
        <Row>
          <ul>
            <li><h2><Link to="/">Home</Link></h2></li>
            <li><h2><Link to="/portfolio">Portfolio</Link></h2></li>
            <li><h2><Link to="/probono">Pro&nbsp;Bono </Link> </h2></li>
            <li><h2><Link to="/pricing">Pricing</Link></h2></li>
            <li><h2><Link to="/aboutus">About&nbsp;Us</Link></h2></li>
          </ul>
        </Row>
      </nav>
    )
}

export default NavBar