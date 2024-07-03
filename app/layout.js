import { Provider } from 'react-redux';
import store from '../redux/storeConfig/store';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import { VideoSplashScreen } from '../components/video/VideoSplashScreen.jsx';
import AuthProvider from '../providers/AuthProvider.jsx'; 

function MyApp({ Component, pageProps }) {

  return (
    <>
        <Provider store={store}>
          {/* // AuthProvider is a custom provider that fetches the user data */}
        </Provider>
    </>
  );
}

export default MyApp;
