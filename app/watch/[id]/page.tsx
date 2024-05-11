'use client'
import VideoPlayer from "@/components/VideoPlayers";
import { getRelatedVideos, getVideoDetails } from "@/redux/features/videoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Video = (props: any) => {
  return (
    <div className='px-2'>
      <Link href={`/watch/${props.videoId}`}>
        <div className="xl:flex">
            <div>
              <img alt="Video Thumbnail" className='w-full lg:w-60 xl:w-60' src={props.thumbnail} />
            </div>
            <div className="xl:pl-4">
              <h3 className='text-[15px]'>{props.title}</h3>
              <div className='sm:mt-1'>
                <p className='text-[#606060]'>{props.channel}</p>
                <p className='text-[#606060] '>time</p>
              </div>
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
    <div className="lg:flex">
        <div className="py-10 px-5 lg:w-3/4">
            <div>
              <VideoPlayer url={`https://www.youtube.com/watch?v=${params.id}`} />
            </div>
            <h2 className='text-md sm:text-xl md:text-2xl text-[#000000] font-medium'>{videoDetails?.snippet?.title}</h2>
            <h5 className='w-fit text-sm sm:text-md font-medium text-[#000000] px-3 py-2 rounded-[10px] bg-[#f2f2f2] tracking-wide'>{videoDetails?.snippet?.channelTitle}</h5>
            <div>{videoDetails?.statistics?.likeCount}</div>
            <div>{videoDetails?.statistics?.viewCount}</div>
        </div>
        <div className='flex flex-col gap-y-4 lg:mt-10'>

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
