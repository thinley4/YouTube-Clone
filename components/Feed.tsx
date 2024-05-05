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
    dispatch(getCategoryVideos(`search?part=snippet&q=${id ? id : "Computer Science"}`))
    document.title = `${id ? id + "- Youtube" : "Home - Youtube"}`
  }, [id])
  return (
    <>
        {
            //@ts-ignore
          categoryVideos?.map((e, index) => {
            return (
              <div key={index} style={{ marginTop: index === 0 ? "0px" : "0px" }}>
                <VideoCard title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on="" channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
              </div>
            )
          })
        }
    </>
  )
}

export default Feed