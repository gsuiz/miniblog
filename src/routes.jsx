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
        element: <h1>entrar</h1>
      },
      {
        path:"/register",
        element: <h1>cadastrar</h1>
      }
    ],
  },
])

export default routes
