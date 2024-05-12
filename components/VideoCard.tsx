import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  videoId: string,
  thumbnail: string,
  title: string,
  channel: string,
  channelId: string
}


function VideoCard({videoId, thumbnail, title, channel, channelId}: Props) {

  return (
    <Link className='sm:w-72' href={`/watch/${videoId}`}>
        <Image width={200} height={200} className='w-full rounded-[12px]' alt="img" src={thumbnail} />
        <div className='gap-x-3 items-start mt-2'>
            <div  className='text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]'>
              {title?.slice(0, 60)}
            </div>
            <div className='mt-1'>
                <p  className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-'>{channel}</p>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard