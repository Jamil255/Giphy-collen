// gif-context.jsx
import { GiphyFetch } from '@giphy/js-fetch-api'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const GifContext = createContext()

const GifProvider = ({ children }) => {
  if (!children) {
    throw new Error('GifProvider expects a children prop.')
  }

  const [gifs, setGifs] = useState([])
  const [filter, setFilter] = useState('gifs')
  const [favorites, setFavorites] = useState([])
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
  console.log('GifProvider: Rendering with children:', children) // Add log
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteGIFs')) || []
    setFavorites(favorites)
  }, [])

  const addToFavorites = (id) => {
    console.log(id)
    if (favorites.includes(id)) {
      // If the item is already in favorites, remove it
      const updatedFavorites = favorites.filter((itemId) => itemId !== id)
      localStorage.setItem('favoriteGIFs', JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    } else {
      // If the item is not in favorites, add it
      const updatedFavorites = [...favorites]
      updatedFavorites.push(id)
      localStorage.setItem('favoriteGIFs', JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    }
  }
  return (
    <GifContext.Provider
      value={{
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        addToFavorites,
        favorites,
      }}
    >
      {children}
    </GifContext.Provider>
  )
}

GifProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const GifState = () => {
  const context = useContext(GifContext)
  if (!context) {
    throw new Error('useGifState must be used within a GifProvider')
  }
  return context
}

export default GifProvider
