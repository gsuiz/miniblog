import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './routes/home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'

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
        path: "/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/about",
        element:<div>sobre</div>
      }
    ],
  },
])

export default routes
