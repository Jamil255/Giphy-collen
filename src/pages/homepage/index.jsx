import { data } from 'autoprefixer'
import React, { useEffect } from 'react'
import { GifState } from '../../context/gif-context'
import Gif from '../../components/gif/Gif'
import FilterGif from '../../components/filterGif/Filter-Gif'

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState()
  const fetchTrendingGIFs = async () => {
    try {
      const { data } = await gf.trending({
        limit: 20,
        type: filter,
        rating: 'g',
      })
      setGifs(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTrendingGIFs()
  }, [filter])
  return (
    <div>
      <img src="/banner.gif" className="mt-2 rounded w-full" />
      <FilterGif showTrending />
      <div className="columns-2 md:columns-3 lg:colums-4 xl:colums-5 gap-2">
        {gifs?.map((gif) => {
          return <Gif gif={gif} key={gif?.title} />
        })}
      </div>
    </div>
  )
}

export default Home
