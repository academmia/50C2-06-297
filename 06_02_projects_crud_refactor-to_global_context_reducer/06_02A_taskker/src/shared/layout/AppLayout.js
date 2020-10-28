import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';  // moved to Nav

// import logo from './logo.svg';               // moved to Header
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';


 
class AppLayout extends Component {

    render() {

        const { children } = this.props;

        return (

                <div>   {/* <Page> */}
                    <div className={"page-main"}>     {/* <Page.Main> */}
    
                        {/* <Site.Header /> */}
                        <Header />
                        {/* <Site.Nav /> */}
                        <Nav />
                        {/* <Page.Content /> */}
                        { children }
                    </div>
                    {/*footer*/}
                    <Footer />
                </div>

        )
    }
}


export default AppLayout;
