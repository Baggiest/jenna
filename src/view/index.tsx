import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './app';
import Root from "./routes/root";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
]);


const root = createRoot(document.body);
root.render(
    <React.StrictMode >
        <RouterProvider router={router} />
    </React.StrictMode>
);