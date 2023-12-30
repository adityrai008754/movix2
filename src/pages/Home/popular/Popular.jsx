import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import UseFetch from '../../../Hooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';

const Popular = () => {
    const[endpoint,setEndpoint]=useState("movie");
    const {data,loading}=UseFetch(`/${endpoint}/popular`)
    const onTabChange =(tab)=>{
        setEndpoint(tab==="Movies" ? "movie" : "tv");
    }
    console.log({data});
  return (
    <div className='carouselSection'><ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel 
        endpoint={endpoint}
        data={data?.results} loading={loading}/>
        </div>
  )
}

export default Popular