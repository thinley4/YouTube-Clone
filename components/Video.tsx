import Image from "next/image"
import Link from "next/link"

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

export default Video;