'use client'

import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks"
import { searchById } from "@/redux/features/searchSlice"
import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"

export default function Page({params}: {params: any}) {

    const dispatch = useAppDispatch()
    const store = useAppStore()
    const initialized = useRef(false)
    if (!initialized.current) {
      //@ts-ignore
      store.dispatch(searchById(`search?part=snippet&q=${params.name}`))
      initialized.current = true
    }
  
    const { searchResults } = useAppSelector((state) => state.search)

    return (
        <div className="pt-20 lg:px-10 lg:pb-10">
          {searchResults.map((e: any, index: number) => (
              <div className='pt-5' key={index + 1}>
                <Link className="lg:flex" key={index + 1} href={`/watch/${e.id?.videoId}`}>
                <Image  className='w-full lg:w-96' width={100} height={100} alt="img" src={e.snippet?.thumbnails?.medium?.url} />
                <div className="pl-3 lg:w-3/4">
                  <div className="pt-2 lg:pt-0">{e.snippet?.title}</div>
                  <div className="pt-2">{e.snippet?.channelTitle}</div>
                  <div className='hidden pt-2 lg:block tracking-wider font-normal sm:text-[#0f0f0f] text-[13px] leading-[16px]'>
                    {e.snippet?.description?.slice(0, 124) + "..."}
                  </div>
                </div>
            </Link>
              </div>
          ))}
        </div>
      )
      

}

