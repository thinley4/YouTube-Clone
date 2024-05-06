'use client'
import VideoPlayer from "@/components/VideoPlayers";
import { getRelatedVideos, getVideoDetails } from "@/redux/features/videoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Video = (props: any) => {
  return (
    <div className='flex flex-col sm:flex-row w-[98%] sm:w-[90%] sm:items-center gap-x-4 cursor-pointer' >
      <Link href={`/watch/${props.videoId}`}>
          <img alt="Video Thumbnail" className='w-[100%] sm:w-[210px] sm:h-[110px] bg-cover' src={props.thumbnail} />
          <div>
            <h3 className='text-[15px] md:text-[16px] lg:text-[18px] font-medium tracking-wide text-[#000000]  md:leading-[24px] w-[100%] sm:w-[110%]'>{props.title}</h3>
            <div className='sm:mt-1'>
              <p className='text-[#606060] text-[13.5px] font-[500] tracking-wide'>{props.channel}</p>
              <p className='text-[#606060] text-[13.5px] font-medium tracking-wider -mt-1'>time</p>
            </div>
          </div>
      </Link>
    </div>
  )
}

function Watch({ params }: { params: any }) {
  const dispatch = useDispatch();
  //@ts-ignore
  const { videoDetails } = useSelector((state) => state.video)
  //@ts-ignore
  const { relatedVideos } = useSelector((state) => state.video)

  useEffect(() => {
    //@ts-ignore
    dispatch(getVideoDetails(`videos?part=snippet,statistics&id=${params.id}`))
    //@ts-ignore
    dispatch(getRelatedVideos(`search?part=snippet&relatedToVideoId=${params.id}&type=video`))
  }, [params.id])

  return (
    <div className="pt-10 px-3">
      <div>
          <VideoPlayer url={`https://www.youtube.com/watch?v=${params.id}`} />
          <h2 className='text-md sm:text-xl md:text-2xl text-[#000000] font-medium'>{videoDetails?.snippet?.title}</h2>
          <h5 className='w-fit text-sm sm:text-md font-medium text-[#000000] px-3 py-2 rounded-[10px] bg-[#f2f2f2] tracking-wide'>{videoDetails?.snippet?.channelTitle}</h5>
          <div>{videoDetails?.statistics?.likeCount}</div>
          <div>{videoDetails?.statistics?.viewCount}</div>
      </div>
      <div className='flex flex-col gap-y-4 mt-48 sm:mt-40 lg:mt-0'>

          {
            relatedVideos?.map((e, index) => {
              return (
                <Video key={index + 2} thumbnail={e.snippet?.thumbnails?.medium?.url} width="210px" title={e.snippet.title} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
              )
            })
          }

      </div>
    </div>
  );
}

export default Watch;
