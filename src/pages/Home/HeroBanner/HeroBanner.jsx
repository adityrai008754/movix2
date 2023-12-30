import React, { useEffect } from 'react'
import { useState } from 'react'

import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../Hooks/UseFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';





const HeroBanner = () => {
    const [background,setBackground]=useState("");
    const [query,setQuery]=useState("");
    const navigate=useNavigate();
    const {url}=useSelector((state)=> state.home);
    console.log({url});

    const {data,loading}=  useFetch("/movie/upcoming");

    useEffect(()=>{ 
        const bg = "https://image.tmdb.org/t/p/original/"+ data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        console.log(bg);
        setBackground(bg);
    },[data])


    const serchQueryHandler =(event)=>{
        if((event.key==="Enter") && query.length>0){
            navigate(`/search/${query}`)
        }
    }
    const handleButtonClick = () => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
  return (
    <div className='heroBanner'>
        {!loading && <div className="backdrop-img">
            <Img src={background}/>
        </div>}
        <div className='opacity-layer'></div>
        <ContentWrapper>
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Million of movies,TV shows and people to discover. Explore Now.</span>
                <div className="searchInput">
                    <input type='text'
                        placeholder='Search for a movie or TV show...'
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyUp={serchQueryHandler}
                        />
                    <button onClick={handleButtonClick}
                    >Search</button>
                </div>
            </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner