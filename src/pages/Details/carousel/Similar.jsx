import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import UseFetch from "../../../Hooks/UseFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = UseFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    if(data?.results.length ===0){
        return;
    }
    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;