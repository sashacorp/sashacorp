import * as React from 'react'
import Footer from './footer';
import NavBar from './navbar';

const Layout = ({children, pageTitle, subTitle}) => {
    return (
        <main>
            <NavBar/>
            <div className="section">
            <h1>{pageTitle}</h1>
            {children}
            </div>
            <Footer/>
        </main>
    )

}

export default Layout