'use client'

import React, { useRef } from 'react'
import VideoCard from '@/components/VideoCard'
import { getCategoryVideos } from '@/redux/features/categorySlice'
import { RootState } from '@/redux/store'
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks'
function Feed() {

  const dispatch = useAppDispatch()
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    //@ts-ignore
    store.dispatch(getCategoryVideos(`search?part=snippet&q=${"Traveling vlog"}`))
    initialized.current = true
  }
  const { categoryVideos } = useAppSelector((state: RootState) => state.category)
  

  return (
    <div className="px-4 pt-12 sm:flex justify-center w-full">
      <div className='sm:grid grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4 '>
          {
            categoryVideos?.map((e: any, index) => {
              return (
                <div key={index} className='pt-5'>
                  <VideoCard title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Feed