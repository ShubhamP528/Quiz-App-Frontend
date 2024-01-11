import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './GlobleContext/AppContext';
import { AuthContextProvider } from './GlobleContext/AuthContext';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <AppContextProvider>
                <App />
                <Toaster />
            </AppContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
);


