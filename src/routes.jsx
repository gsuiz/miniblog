import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './routes/home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import About from './routes/About/About'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About/>,
      },
    ],
  },
])

export default routes
