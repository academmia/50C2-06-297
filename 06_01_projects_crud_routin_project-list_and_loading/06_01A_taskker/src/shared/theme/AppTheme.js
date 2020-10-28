
import React, { Component } from 'react';

import { ThemeContext, themes } from './theme-context';

class AppTheme extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: JSON.parse(localStorage.getItem('currentTheme')) || themes.default,
            update: this.updateTheme
        }
    }

    updateTheme = (selectedTheme = 'default') => {
        console.log('updateTheme...');
        this.setState( prevState => ({
            current: themes[selectedTheme]
        }) )
    }

    render() {
        
        return (
            <ThemeContext.Provider value={ this.state }>
                <link rel="stylesheet" href={ this.state.current && this.state.current.path }/>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default AppTheme;
