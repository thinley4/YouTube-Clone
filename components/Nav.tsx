'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './assets/ytlogo.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ComputerIcon from '@mui/icons-material/Computer';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const drawerWidth = 200;

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <div className='fixed bg-white h-10 flex items-center justify-between w-full'>
        <div className='flex gap-2'>
          <div>
            <button className='h-0' onClick={handleDrawerOpen}>
              <MenuIcon />
            </button>
          </div>
          <div className='w-24'>
            <Image src={Logo} alt='image' />
          </div>
        </div>

        <div className='flex gap-2'>
          <div>
            <SearchIcon />
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
            Logo
          </div>
        </div>

      </div>

      <Drawer
        className='absolute top-0 left-0 z-1'
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
        <div className='h-10 flex items-center'>
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
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-10 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <HomeIcon />
              <div>Home</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <AirportShuttleIcon />
              <div>Travel</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <FastfoodIcon />
              <div>Food</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <LibraryMusicIcon />
              <div>Music</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <SportsBasketballIcon />
              <div>Sports</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <ComputerIcon />
              <div>Programming</div>
            </div>
          </button>
          <button className=' text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 me-2'>
            <div className='flex items-center gap-2'>
              <NewspaperIcon />
              <div>News</div>
            </div>
          </button>
          
        </div>

      </Drawer>
      
        <div className='mt-14 mx-2'>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
              enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
              imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
              Convallis convallis tellus id interdum velit laoreet id donec ultrices.
              Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
              nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
              feugiat vivamus at augue. At augue eget arcu dictum varius duis at
              consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
              sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
              neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
              tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
              sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
              tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
              et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
              eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
              posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </div>

    </Box>
  );
}