import React, { Profiler } from 'react';
import AppLayout from '../../shared/layout/AppLayout';
import { SettingsContext } from '../settings-context';
import { profile } from '../../shared/core/profile'

// import ProfileAppSettings from '../components/ProfileAppSettings';

const ProfileAppSettings = React.lazy( () => import('../components/ProfileAppSettings') );

const ProfilePage = (props) => {
    return (
        <Profiler id="ProfilePage" onRender={profile}>
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="row">

                    <div className="col col-lg-4">
                        <div className="card card-profile">
                            <div className="card-header" style={{ backgroundImage: `url(images/photos/eberhard-grossgasteiger-311213-500.jpg)` }}></div>
                            <div className="card-body text-center"><img className="card-profile-img" alt="Profile" src="images/faces/male/16.jpg"/>
                                <h3 className="h3 mt-0 mb-4 mb-3">James Hansen</h3>
                                <p className="mb-4">Big belly rude boy, million dollar hustler. Unemployed.</p>
                                <ul className="list list-inline social-links">
                                    <li className="list-inline-item"><button className="btn btn-sm btn-twitter"><i className="fa fa-twitter mr-2"></i>Follow</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <p className="text-muted mb-0">Contact me on:</p>
                                        <ul className="list list-inline social-links mb-0 mt-2">
                                            <li className="list-inline-item"><a href="/Profile"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="/Profile"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="/Profile"><i className="fa fa-phone"></i></a></li>
                                            <li className="list-inline-item"><a href="/Profile"><i className="fa fa-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <SettingsContext.Consumer>
                                { ({settings}) => (
                                    <React.Fragment>
                                        {   settings.profileData && settings.profileData.isAdmin &&
                                            <ProfileAppSettings settings={ settings } />
                                        }
                                    </React.Fragment>
                                ) }
                            </SettingsContext.Consumer>

                        </div>
                        <div className="col col-lg-8">
                            <form className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Edit Profile</h3>
                                    <div className="row">
                                        <div className="col col-md-5">
                                            <div className="form-group"><label className="form-label">Company</label><input className="form-control" type="text" disabled="" value="Creative Code Inc." readOnly /></div> 
                                        </div>
                                        <div className="col col-sm-6 col-md-3">
                                            <div className="form-group"><label className="form-label">Username</label><input className="form-control" type="text" value="michael23" readOnly /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-4">
                                            <div className="form-group"><label className="form-label">Email address</label><input className="form-control" type="email" value="" readOnly /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-6">
                                            <div className="form-group"><label className="form-label">First Name</label><input className="form-control" type="text" value="Chet" readOnly /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-6">
                                            <div className="form-group"><label className="form-label">Last Name</label><input className="form-control" type="text" value="Faker" readOnly /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group"><label className="form-label">Address</label><input className="form-control" type="text" value="Melbourne, Australia" readOnly /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-4">
                                            <div className="form-group"><label className="form-label">City</label><input className="form-control" type="text" value="Melbourne" readOnly /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-3">
                                            <div className="form-group"><label className="form-label">Postal Code</label><input className="form-control" type="number" value="" readOnly /></div>
                                        </div>
                                        <div className="col col-md-5">
                                            <div className="form-group"><label className="form-label">Country</label><select className="form-control custom-select"><option>Germany</option></select></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group mb=0"><label className="form-label">About Me</label><textarea className="form-control" rows="5" readOnly value="Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions."/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right"><button className="btn btn-primary" type="submit">Update Profile</button></div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
        </Profiler>
    )
}

export default ProfilePage;