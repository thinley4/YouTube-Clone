'use client'

import VideoPlayer from "@/components/VideoPlayers";
import { getRelatedVideos, getVideoDetails } from "@/redux/features/videoSlice";
import Link from "next/link";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { useRef } from "react";
import Image from "next/image";

interface Props {
  videoId: string,
  thumbnail: string,
  title: string,
  channel: string,
  channelId: string
}

const Video = ({videoId, thumbnail, title, channel}: Props) => {
  return (
    <div className='px-2'>
      <Link href={`/watch/${videoId}`}>
        <div className="xl:flex">
            <div>
              <Image width={100} height={100} alt="Video Thumbnail" className='w-full lg:w-60' src={thumbnail} />
            </div>
            <div className="xl:pl-4 pt-3 xl:p-0 lg:w-60 xl:w-1/2">
              <div className='text-[15px]'>{title}</div>
              <div className='sm:mt-1'>
                <p className='text-[#606060]'>{channel}</p>
              </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

function Watch({ params }: { params: string }) {

  const dispatch = useAppDispatch()
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    //@ts-ignore
    store.dispatch(getVideoDetails(`videos?part=snippet,statistics&id=${params.id}`))
    //@ts-ignore
    store.dispatch(getRelatedVideos(`search?part=snippet&relatedToVideoId=${params.id}&type=video`))
    initialized.current = true
  }

  const { videoDetails } = useAppSelector((state) => state.video)
  const { relatedVideos } = useAppSelector((state) => state.video)

  return (
    <div className="lg:flex">
        <div className="py-10 px-5 lg:w-full">
            <div>
              <VideoPlayer url={`https://www.youtube.com/watch?v=${params.id}`} />
            </div>
            <div className='text-md sm:text-xl md:text-2xl text-[#000000] font-medium'>{videoDetails?.snippet?.title}</div>
            <div className='mt-2 w-fit text-sm sm:text-md font-medium text-[#000000] px-3 py-2 rounded-[10px] bg-[#f2f2f2] tracking-wide'>{videoDetails?.snippet?.channelTitle}</div>
            <div className="pt-2">Views: {videoDetails?.statistics?.likeCount}</div>
            <div className="pt-2">{videoDetails?.statistic?.viewCount}</div>
        </div>
        <div className='flex flex-col gap-y-4 lg:mt-20'>

            {
              relatedVideos?.map((e: any, index: number) => {
                return (
                  <Video key={index + 2} thumbnail={e.snippet?.thumbnails?.medium?.url} title={e.snippet.title} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
                )
              })
            }

        </div>
    </div>
  );
}

export default Watch;
