import React, { useState } from 'react'
import { HiEllipsisVertical, HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={'/'} className="flex gap-2">
          <img src="/logo.svg" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>
        <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          {' '}
          Reactions
        </Link>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiEllipsisVertical
            size={35}
            className={`px-0.5 hover:gradient${
              showCategories ? 'gradient' : ''
            } border-b-4 hidden lg:block`}
          />
              </button>
              <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded' >
                  <Link to={"favorites"}>Favorites GIFs</Link>
              </div>
              <button>
                  <HiMiniBars3BottomRight className='text-sky-400 block lg:hidden' size={30}/>
              </button>
      </div>
    </nav>
  )
}

export default Header
