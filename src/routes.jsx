import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './routes/home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import About from './routes/About/About'
import NewPost from './routes/New_Post/NewPost'
import Dashboard from './routes/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Search from './routes/Search/Search'
import Posts from './routes/posts/Posts'
import EditPost from './routes/EditPost/EditPost'

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
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/posts/create',
        element: (
          <ProtectedRoute>
            <NewPost />
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/posts/:id',
        element: <Posts />,
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost/>
      },
    ],
  },
])

export default routes
