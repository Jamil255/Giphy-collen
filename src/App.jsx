import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/homepage'
import GifPage from './pages/singleGif'
import Category from './pages/categoriesPage'
import SearchPage from './pages/searchPage'
import Favorites from './pages/favorite'
import AppLayout from './layouts/AppLayout'
import GifProvider from './context/gif-context'

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:type/:slug',
        element: <GifPage />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <SearchPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
])

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  )
}

export default App
