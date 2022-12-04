import * as React from 'react'
import NavBar from './navbar';

const Layout = ({children, pageTitle, subTitle}) => {
    return (
        <main>
            <NavBar/>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )

}

export default Layout