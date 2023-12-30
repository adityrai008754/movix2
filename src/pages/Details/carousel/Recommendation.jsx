import React from "react";

import Carousel from "../../../components/carousel/Carousel";

import UseFetch from "../../../Hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = UseFetch(
        `/${mediaType}/${id}/recommendations`
    );
        if(data?.results.length ===0){
            return;
        }
    return (
        
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;