import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import Apply from './routes/Apply';
import FamilyLaw from './routes/content/FamilyLaw';
import CriminalLaw from './routes/content/CriminalLaw';
import CorporateLaw from './routes/content/CorporateLaw';
import IntellectualProperty from './routes/content/IntellectualProperty';
import Medical from './routes/content/Medical';
import Commercial from './routes/content/Commercial';
import WritPetition from './routes/content/WritPetition';
import Litigation from './routes/content/Litigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/content/family",
    element: <FamilyLaw />
  },
  {
    path: "/content/criminal",
    element: <CriminalLaw />
  },
  {
    path: "/content/corporate",
    element: <CorporateLaw />
  },
  {
    path: "/content/intellectualproperty",
    element: <IntellectualProperty />
  },
  {
    path: "/content/litigation",
    element: <Litigation />
  },
  {
    path: "/content/medicalnegligence",
    element: <Medical />
  },
  {
    path: "/content/commerciallaw",
    element: <Commercial />
  },
  {
    path: "/content/writpetition",
    element: <WritPetition />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
