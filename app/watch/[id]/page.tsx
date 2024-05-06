import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetails, getRelatedVideos } from "@/redux/features/videoSlice";
import VideoPlayer from "@/components/VideoPlayers";

function Watch({ params }: {params: any}) {
    
    return (
        <div className="p-10">
            <VideoPlayer url={`https://www.youtube.com/watch?v=${params.id}`}/>
        </div>
    )
}

export default Watch;