// .storybook/manager.js

import { addons } from '@storybook/addons';
import customTheme from './customTheme';

addons.setConfig({
    theme: customTheme,
    sidebar: {
        showRoots: false,
    },
    toolbar:{
        'storybook/background': { hidden: true },
    }
});