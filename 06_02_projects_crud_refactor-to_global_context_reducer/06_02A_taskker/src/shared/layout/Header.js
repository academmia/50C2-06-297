import React from 'react';
import logo from './logo.svg';

const Header = () => {
    return (
        <div className="header py-4">
            <div className="container">
                <div className="d-flex">
                    <a className="header-brand" href="/">
                        <img src={logo} className="header-brand-img" alt="Taskker" />
                        Taskker
                    </a>
                    <div className="d-flex order-lg-2 ml-auto">
                        <div className="dropdown d-flex"><a href="/" className="nav-link">
                            <i className="fe fe-bell"></i> <span className="nav-unread"></span></a></div>
                        <div className="dropdown"><a href="/"  className="nav-link pr-0 leading-none">
                            <span className="avatar" 
                                style={{ backgroundImage: `url('./images/faces/female/25.jpg')` }}>
                            </span>
                            <span className="ml-2 d-none d-lg-block"><span className="text-default">James Hansen</span>
                            <small className="text-muted d-block mt-1">Administrator</small></span></a></div>
                    </div>
                    <a href="/"   className="header-toggler d-lg-none ml-3 ml-lg-0"><span className="header-toggler-icon"></span></a>
                </div>
            </div>
        </div>
    )
}

export default Header;
