
import React, { useState, useContext, useEffect, Profiler } from 'react';
import AppLayout from '../../shared/layout/AppLayout';
import { SettingsContext } from '../settings-context';
import { ThemeContext } from '../../shared/theme/theme-context';
// import { profile } from '../../shared/core/profile';

import { useIntl } from 'react-intl';
import RoundSlider from '../../shared/components/RoundSlider';
import ProfileImageUpload from '../components/ProfileImageUpload';

const AppSettings = (props) => {
    const {settings, updateSettings, updateIntl} = useContext(SettingsContext);
    const [appSettings, setAppSettings] = useState(settings.appSettings);
    const [userSettings, setUserSettings] = useState(settings.userSettings);

    const {current: theme, update: updateTheme} = useContext(ThemeContext);

    const intl = useIntl();
    console.log('Intl: ', intl)

    const themeChanged = (ev) => {
        updateTheme(ev.target.value);
    }

    useEffect(() => {
        console.log('Effect by new theme: ', theme);
        localStorage.setItem('currentTheme', JSON.stringify(theme));
    }, [theme]);

    const [rsliderValue, setRSliderValue] = useState(0);
    const onRounderSliderChange = (slider) => {
        console.log('RoundSlider value changed: ', slider.value, slider.preValue);
        setRSliderValue(slider.value || 0);
    }
    
    const [sliderRef, setSliderRef] = useState({});
    const getRSliderRef = (ref) => {
        console.log('Received ref: ', ref);
        setSliderRef(ref);
    }

    const onSliderReset = () => {
        sliderRef.setValue(0);
        setRSliderValue(0);
    }
    
    return (
        <Profiler id="AppSettings" onRender={ ()=>{} }>
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="text-muted mb-0">App Settings:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">API Server URL:</label>
                                        <input value={ appSettings.baseAPI } 
                                            onChange={ ev => setAppSettings({ ...appSettings, baseAPI: ev.target.value }) }
                                            className="form-control" type="text"  />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-label">Tasks</div>
                                        <label className="custom-control custom-checkbox">
                                            <input value="notifyOnTaskChange" checked={ userSettings.notifyOnTaskChange } 
                                                onChange={ ev => setUserSettings({ ...userSettings, notifyOnTaskChange: ev.target.checked }) }
                                                type="checkbox" className="custom-control-input" name="notifyOnTaskChange" />
                                            <span className="custom-control-label">Notify on tasks changes </span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={ () => updateSettings(appSettings, userSettings) } 
                                            type="button" className="btn btn-outline-success">
                                            Update settings </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="text-muted mb-0">App Theme:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">Theme Select:</label>
                                        
                                        <div className="custom-switches-stacked">

                                            <label className="custom-switch">
                                                <input checked={ theme.name === 'default' } onChange={ themeChanged }
                                                    type="radio" name="toggle" className="custom-switch-input" value="default" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Default</span>
                                            </label>
                                            <label className="custom-switch">
                                                <input checked={ theme.name === 'one' } onChange={ themeChanged } 
                                                    type="radio" name="toggle" className="custom-switch-input" value="one" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">One</span>
                                            </label>
                                        
                                        </div>

                                    </div>
                                </div>
                            </div>
                        
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="text-muted mb-0">Language:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="custom-switches-stacked">

                                            <label className="custom-switch">
                                                <input checked={ intl.locale === 'en' } onChange={ () => updateIntl('en') }
                                                    type="radio" name="locale" className="custom-switch-input" value="en" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">English</span>
                                            </label>
                                            <label className="custom-switch">
                                                <input checked={ intl.locale === 'ro' } onChange={ () => updateIntl('ro') } 
                                                    type="radio" name="locale" className="custom-switch-input" value="ro" />
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Romana</span>
                                            </label>
                                        
                                        </div>

                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                    <div className="row">
                        <div className="col col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h6><em>Received from slider: {rsliderValue}</em></h6>
                                </div>
                                <div className="card-body">
                                    <RoundSlider 
                                        config={{ width: 15 }}
                                        change={ onRounderSliderChange }
                                        setRef={ getRSliderRef }/>
                                </div>
                                <div className="card-footer">
                                    <button onClick={ onSliderReset } 
                                        className="btn btn-info btn-sm">
                                        Reset </button>
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>

                <ProfileImageUpload />

            </div>
        </AppLayout>
        </Profiler>
    )
}

export default AppSettings;

