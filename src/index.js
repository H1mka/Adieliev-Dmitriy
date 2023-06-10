import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App/App';
import { Provider } from 'react-redux';
import store from 'store/store';

import '@fontsource/oswald/300.css';
import '@fontsource/source-serif-pro'

import { ThemeProvider, createTheme,  } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Source-serif-pro',
        h3: {
            fontFamily: 'Oswald'
        }
    },
    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
);
