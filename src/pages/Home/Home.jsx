import React from 'react'
import "./style1.scss"
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
export const Home = () => {
  return (
    <div className='homepage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}
