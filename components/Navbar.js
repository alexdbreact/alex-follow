import Image from 'next/image';
import alexz from '../public/alexz.png';
import alexo from '../public/alexo.png';
import alexx from '../public/alexx.jpg';
import "../app/globals.css"
import { FaFileSignature } from "react-icons/fa6";


const Navbar = () => {
  return (
<nav className="bg-white-100 py-1 px-2 flex items-center justify-around shadow-lg border-blue-200">
  
<Image
     src={alexo}
width={80}
height= {60}
alt='app logo'
priority="true"
  />

<div className=' flex flex-row justify-center items-center '
 >
    <Image
     src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG0wcW9keHdkcXdmbXk5enE3ZTBjZnN5aDdhdTR0d2Q4eGI5MDdzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.gif"}
width={80}
height= {60}
alt='app logo'
priority="true"
className='  '
  />
    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center ">منظومــة المتابعة</h1>

</div>


    <Image
     src={alexx}
width={60}
height= "auto"
alt='alex logo'
priority="true"
className=' rounded-full animate-[pulse_3s_ease-in-out_infinite] ring-2 ring-blue-700  '
  />
  
  
</nav>
  )
}

export default Navbar
