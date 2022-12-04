import * as React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/landingsashacorp3.png'



const NavBar = () => {
    return (
      <div className="navbar">
           <div className="logo">
             <img src={Logo} alt="logo"/>
           </div>
          <ul>
            <li><h3><Link to="/">Home</Link></h3></li>
            <li><h3><Link to="/portfolio">Portfolio</Link></h3></li>
            <li><h3><Link to="/probono">Pro&nbsp;Bono </Link> </h3></li>
            <li><h3><Link to="/pricing">Pricing</Link></h3></li>
            <li><h3><Link to="/aboutus">About&nbsp;Us</Link></h3></li>
          </ul>
      </div>
    )
}

export default NavBar