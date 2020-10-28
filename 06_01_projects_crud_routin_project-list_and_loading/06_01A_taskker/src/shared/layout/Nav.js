import React from 'react';
import { NavLink } from 'react-router-dom';
import { SettingsContext } from '../../app/settings-context';

import { FormattedMessage } from 'react-intl';

const Nav = () => {
    return (
        <SettingsContext.Consumer>
            {   ({settings}) => (
                <div className="header d-lg-flex p-0 collapse">
                    <div className="container">
                        <div className="row row align-items-center">
                            <div className="col-lg-3 ml-auto"></div>
                            <div className="col col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <NavLink to="/" exact activeClassName="active" aria-current="page" className="nav-link">
                                            <i className="fe fe-home"></i> 
                                            <FormattedMessage id="nav.home"
                                                defaultMessage="Home"
                                                description="Home page link"/>    
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/profile" activeClassName="active" className="nav-link">
                                            <i className="fe fe-file"></i> 
                                            <FormattedMessage id="nav.profile"
                                                defaultMessage="Profile"
                                                description="Profile page link"/>    
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/doc-manager" activeClassName="active" className="nav-link">
                                            <i className="fe fe-file"></i> 
                                            <FormattedMessage id="nav.docmanager"
                                                defaultMessage="Doc Manager"
                                                description="Doc Manager page link"/>    
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/gallery" activeClassName="active" className="nav-link">
                                            <i className="fe fe-image"></i> 
                                            <FormattedMessage id="nav.gallery"
                                                defaultMessage="Gallery"
                                                description="Gallery page link"/>    
                                        </NavLink>
                                    </li>
                                {   settings.profileData && settings.profileData.isAdmin &&
                                    <li className="nav-item">
                                        <NavLink to="/app-settings" activeClassName="active" className="nav-link">
                                            <i className="fe fe-settings"></i> 
                                            <FormattedMessage id="nav.app-settings"
                                                defaultMessage=" Settings"
                                                description="App settings page link"/>       
                                        </NavLink>
                                    </li>
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )

            }
        </SettingsContext.Consumer>
    )
}

export default Nav;
