import React from 'react';
// import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { FormattedMessage } from 'react-intl';

const Footer = () => {

    // pt varianta cu FormattedHTMLMessage
    // const appInfo = {
    //     app: 'Taskker',
    //     desc: 'Task Management System'
    // }

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="row">
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >First Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Second Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Third Link</a></li>
                                </ul>
                            </div>
                            <div className="col col-6 col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <li className=""><a href="/" >Fourth Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 mt-4 mt-lg-0">
                    <FormattedMessage id="footer.desc"
                        defaultMessage="<app>Taskker</app> - <desc>Task Management System</desc>"
                        values={{
                            app: msg => <strong><em> {msg} </em></strong>,
                            desc: msg => <em>{msg}</em>
                        }}
                    />
                        {/* LEGACY */}
                        {/* <FormattedHTMLMessage id="footer.desc"
                            defaultMessage=" <em> <strong> {app} </strong> - {desc} </em> "
                            description="Welcome header on app main page"
                            values={ appInfo }/> */}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
