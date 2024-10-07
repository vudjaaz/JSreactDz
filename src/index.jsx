import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/homePages';
import { TodoPage } from './pages/todoPage';
import { ConverterPage } from './pages/converterPage';
import { AboutPage } from './pages/aboutPage';
import { Provider as StoreProvider } from "react-redux";
import { store } from './store';
import { CatalogPage } from './pages/catalogPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }, {
    path: "/todo",
    element: <TodoPage />
  }, {
    path: "/converter",
    element: <ConverterPage />
  }, {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
