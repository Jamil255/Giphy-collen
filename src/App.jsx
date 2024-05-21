import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

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
