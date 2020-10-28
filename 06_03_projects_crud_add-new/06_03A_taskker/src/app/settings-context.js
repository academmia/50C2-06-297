import React from 'react';

import settings from './settings.json';

export const SettingsContext = React.createContext({
    settings,
    updateSettings: () => {},
    updateIntl: () => {}
});
