import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './routes/home/Home'
import Login from './routes/Login/Login'

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
        element: <div>cadastrar</div>
      },
      {
        path:"/about",
        element:<div>sobre</div>
      }
    ],
  },
])

export default routes
