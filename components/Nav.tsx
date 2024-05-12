'use client'

import {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './assets/ytlogo.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import User from '@/components/assets/userPic.jpg'
import Icons from './Icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const drawerWidth = 200;

export default function PersistentDrawerLeft() {
  const [open, setOpen] = useState(false);
  const [extendSearchicon, setExtendSearchicon] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const router =  useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const extendSearch = () => {
    setExtendSearchicon(false);
  }

  const handleOnSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`)
  }

  return (
    <div className='sticky top-0 z-50'>
      { extendSearchicon ?
      <div className='fixed bg-white h-14 flex items-center justify-between w-full '>
          <div className='flex items-center gap-2'>
            <div>
              <button className='h-0' onClick={handleDrawerOpen}>
                <MenuIcon />
              </button>
            </div>
            <Link href={'/'} className='w-24'>
              <Image src={Logo} alt='image' />
            </Link>
          </div>

          <div className='hidden sm:flex justify-center sm:h-10 sm:items-center'>
              <form onSubmit={handleOnSubmit}>
                <input onChange={(e) => setSearchValue(e.target.value)} type="search" id="default-search" className="min-w-[20rem] h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search ..." required />
                <button type="submit" className="text-black end-2.5 pl-4 bottom-3"><SearchIcon /></button>
              </form>
          </div>

          <div className='flex gap-2'>
              <div className='sm:hidden'>
                <button onClick={extendSearch}>
                  <SearchIcon />
                </button>
              </div>
              <div>
                <KeyboardVoiceIcon />
              </div>
              <div>
                <VideoCallIcon />
              </div>
              <div>
                <NotificationsIcon />
              </div>
              <div className='mr-2'>
                <Image className="w-8 h-8 rounded-full" src={User} alt="Rounded avatar" />
              </div>
          </div>

      </div>
      : 
      <div className='fixed bg-gray-50 h-12 flex items-center w-full'>
        <div className='flex justify-around w-full'>
              <button onClick={() => setExtendSearchicon(true)}>
                <ArrowBackIcon />
              </button>
            <form onSubmit={handleOnSubmit} className="max-w-md">
                <div className="relative">
                    <input onChange={(e) => setSearchValue(e.target.value)} type="search" id="default-search" className="block h-10 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search ..." required />
                    <button type="submit" className="text-black absolute end-2.5 bottom-3"><SearchIcon /></button>
                </div>
            </form>
        </div>
      </div>
    }

      <Drawer
            className='sticky top-0 z-50'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <div className='h-14 flex items-center'>
              <div className='flex gap-2'>
                <div>
                  <button className='h-0' onClick={handleDrawerClose}>
                    <MenuIcon />
                  </button>
                </div>
                <div className='w-24'>
                  <Image src={Logo} alt='image' />
                </div>
              </div>
            </div>

            <Divider />

            <div className='flex flex-col'>
                  <Icons />
            </div>

      </Drawer>
    </div>
  );
}