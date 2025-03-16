import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './routes/home/Home'

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
        element: <div>entrar</div>
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
