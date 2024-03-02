import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import TrackDetail from './pages/TrackDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Dashboard from './pages/Dashboard'
import Composers from './pages/Composers'
import CreateTrack from './pages/CreateTrack'
import TrackGenre from './pages/TrackGenre'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'tracks/:id', element: <TrackDetail/>},
      {path: 'register', element: <Register/>},
      {path: 'login', element: <Login/>},
      {path: 'profile/:id', element: <UserProfile/>},
      {path: 'mytracks/:id', element: <Dashboard/>},
      {path: 'composers', element: <Composers/>},
      {path: 'create', element: <CreateTrack/>},
      {path: 'posts/genre/:genre', element: <TrackGenre/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
