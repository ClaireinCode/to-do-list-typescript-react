import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
                path: "home/",
                element: <HomePage/>
            },
            {
                path: "signup/",
                element: <SignUpPage/>
            },
            {
                path: "login/",
                element: <LogInPage/>
            }
        ]
    }

]);

export default router;