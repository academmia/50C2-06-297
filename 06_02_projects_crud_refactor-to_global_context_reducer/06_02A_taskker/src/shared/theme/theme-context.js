
import React from 'react';

export const themes = {
    default: {
        name: 'default',
        path: './themes/theme-default.css'
    },
    one: {
        name: 'one',
        path: './themes/theme-one.css'
    },
  };
  
  export const ThemeContext = React.createContext({
    current: JSON.parse(localStorage.getItem('currentTheme')) || themes.one,
    update: () => {}
  }
  );

