
import { createIntl } from 'react-intl';

import enIntl from "./translations/en-US.json";
import roIntl from "./translations/ro-RO.json";

const AppIntl = {
    en:  createIntl({
      locale: 'en', 
      messages: enIntl 
    }),
    ro:  createIntl({
      locale: 'ro', 
      messages: roIntl 
    }),
};

export default AppIntl;
