import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../Hooks/UseFetch'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import Cast from './cast/cast'
import VideosSection from './videoSection/VideoSection'
import Similar from './carousel/Similar'
import Recommendation from './carousel/Recommendation'
import UseFetch from '../../Hooks/UseFetch'
export const Details = () => {
  const {mediaType,id}=useParams();
  const {data,loading}=UseFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = UseFetch(
    `/${mediaType}/${id}/credits`
);
  // console.log("https://api.themoviedb.org/3/tv/1434/credits");
  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
      </div>

  )
}
