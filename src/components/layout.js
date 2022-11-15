import * as React from 'react'
import { Row } from 'react-grid-system';
import NavBar from './navbar';

const Layout = ({children}) => {
    return (
        <main>
           <Row>
              <NavBar/>
           </Row>
            {children}
        </main>
    )

}

export default Layout