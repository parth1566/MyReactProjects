import React from 'react'
import ThemeProvider,{ThemeContext} from './ThemeProvider'
import { useContext } from 'react';
import AuthProvider from './AuthProvider'
import Navbar from './Navbar';
import Profile from './Profile';
import Settings from './Settings';
import './ContextApp.css'

const AppShell = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`app-shell ${theme}`}>
            <Navbar />
            <Profile />
            <Settings />
        </div>
    );
};

const ContextApp = () => {

    
  return (
     <ThemeProvider>
            <AuthProvider>
               <AppShell/>
            </AuthProvider>
        </ThemeProvider>
  )
}

export default ContextApp
