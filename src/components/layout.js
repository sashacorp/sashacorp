import * as React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import NavBar from './navbar';

const Layout = ({children}) => {
    return (
        <div>
           <Row>
              <NavBar/>
           </Row>
            {children}
        </div>
    )

}

export default Layout