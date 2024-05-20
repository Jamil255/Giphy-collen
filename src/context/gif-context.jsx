import { Children, createContext } from 'react'

const GifContext = createContext()

const GifProvider = ({ Children }) => {
  return <GifContext.Provider>{Children}</GifContext.Provider>
}
export default GifProvider
