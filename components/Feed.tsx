'use client'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '@/components/VideoCard'
import { getCategoryVideos } from '@/redux/features/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
function Feed() {
  const { id } = useParams()
  const dispatch = useDispatch()
  //@ts-ignore
  const { categoryVideos } = useSelector((state) => state.category)
  useEffect(() => {//@ts-ignore
    dispatch(getCategoryVideos(`search?part=snippet&q=${id ? id : "Travel"}`))
    document.title = `${id ? id + "- Youtube" : "Home - Youtube"}`
  }, [id])

  return (
    <div className='sm:grid grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4 '>
        {
            //@ts-ignore
          categoryVideos?.map((e, index) => {
            return (
              <div key={index} className='pt-5'>
                <VideoCard title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on="" channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
              </div>
            )
          })
        }
    </div>
  )
}

export default Feed