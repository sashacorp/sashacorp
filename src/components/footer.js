import * as React from 'react'
import Logo from '../images/landingsashacorp3.png'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className="footer">
         <div className="powered-by">
         <h2>Powered By <Link to="/">SashaCorp</Link></h2>
        </div> 
        <div className="logo-footer">
            <img src={Logo} alt="logo"/>
        </div>
    </div>
  )
}

export default Footer