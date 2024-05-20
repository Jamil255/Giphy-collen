import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/homepage'
import SearchPage from './pages/searchPage'
import GifPage from './pages/singleGif'
import FavoritePage from './pages/favorite'
import CategoriesPage from './pages/categoriesPage'
import GifProvider from './context/gif-context.jsx'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/:query',
        element: <SearchPage />,
      },
      {
        path: '/type/:slug',
        element: <GifPage />,
      },
      {
        path: '/favorite',
        element: <FavoritePage />,
      },
      {
        path: '/:categories',
        element: <CategoriesPage />,
      },
    ],
  },
])
function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  )
}

export default App
