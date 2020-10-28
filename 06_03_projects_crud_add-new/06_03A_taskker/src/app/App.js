import React, { Component, lazy } from 'react';
// import { Profiler } from 'react';
import { Route, Switch } from "react-router-dom";

import "../styles/taskker.css";
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// import AppSettings from './pages/AppSettings';

import settings from './settings.json';
import { SettingsContext } from './settings-context';

import { RawIntlProvider  } from "react-intl";

import AppTheme from '../shared/theme/AppTheme';
import AppIntl from '../shared/locale';
 
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import DocManager from './pages/DocManager';
import ProjectForm from './pages/ProjectForm';

import ProjectState from './context/projects/state';

// import { profile } from '../shared/core/profile';
/* <Profiler id="App" onRender={profile}></Profiler> */
const AppSettings = lazy(() => import('./pages/AppSettings'));

class App extends Component {

  constructor(props) {
    super(props);

    // expect an object
    console.log('first settings...', settings);

    this.state = {
      intl: AppIntl.ro,
      settings: settings,
      updateSettings: this.updateSettings,
      updateIntl: this.updateIntl
    }

  }

  updateSettings = (updatedAppSettings = {}, updatedUserSettings = {}) => {
    console.log('run updateAppSettings...', updatedAppSettings, updatedUserSettings);
    this.setState( (prevState) => ( {
      settings: {
        ...prevState.settings,
        appSettings: {
          ...prevState.settings.appSettings,
          ...updatedAppSettings
        },
        userSettings: {
          ...prevState.settings.userSettings,
          ...updatedUserSettings
        }
      }}) )
  }

  updateIntl = (locale = 'en') => {
    this.setState( () => ({ intl: AppIntl[locale] }))
  }

  render() {
    return (
      
        <RawIntlProvider value={this.state.intl} id={this.state.intl.locale}>
          <AppTheme>
            <SettingsContext.Provider value={this.state}>
              <Switch>
                <Route>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/profile" component={ProfilePage} />
                  <ProjectState>
                    <Route exact path="/projects" component={ProjectsPage} />
                  </ProjectState>
                  <Route exact path="/projects/add" component={ProjectForm} />
                  <Route exact path="/app-settings" component={AppSettings} />
                  <Route exact path="/gallery" component={GalleryPage} />
                  <Route exact path="/doc-manager" component={DocManager} />
                </Route>
              </Switch>
            
            </SettingsContext.Provider>
          </AppTheme>
        </RawIntlProvider>
    );
  }
}

export default App;
