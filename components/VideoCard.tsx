'use client'
import React from 'react'
import Link from 'next/link';

//@ts-ignore
function VideoCard(props) {
  return (
    <Link className='sm:w-72' href={`/watch/${props.videoId}`}>
        <img  className='w-full  rounded-[12px] ' src={props.thumbnail} />
        <div style={{ width: props.rightWidth }} className='gap-x-3 items-start mt-2'>
            <div  className='text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]'>
              {props.title?.slice(0, 60)}
            </div>
            <div className='mt-1'>
                <p  className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-'>{props.channel}</p>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard