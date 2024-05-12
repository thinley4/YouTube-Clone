import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ComputerIcon from '@mui/icons-material/Computer';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const arr = [
    {
        "icon": HomeIcon,
        "name": "Home"
    },
    {
        "icon": FastfoodIcon,
        "name": "Food"
    },
    {
        "icon": AirportShuttleIcon,
        "name": "Travel"
    },
    {
        "icon": LibraryMusicIcon,
        "name": "Music"
    },
    {
        "icon": SportsBasketballIcon,
        "name": "Sports"
    },
    {
        "icon": ComputerIcon,
        "name": "Programming"
    },
    {
        "icon": NewspaperIcon,
        "name": "News"
    }
]

export default function Icons() {
    return (
        <div>
            {arr.map((a, index) => 
                <button key={index+1} className='text-gray-900 bg-white w-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5'>
                    <div className='flex items-center gap-2'>
                        <a.icon />
                        <div>
                            {a.name}
                        </div>
                    </div>
                </button>
            )}
        </div>
    )
}