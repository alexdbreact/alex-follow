import Image from 'next/image';
import alexz from '../public/alexz.png';
import "../app/globals.css"
import { FaFileSignature } from "react-icons/fa6";


const Navbar = () => {
  return (
<nav className="bg-white-100 py-1 px-2 flex items-center justify-around shadow-lg border-blue-200">
  
<FaFileSignature 
className="text-blue-600"
fontSize="3.0em"/>

<div>
    <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient ">منظومــة المتابعة</h1>
<p className='text-sm text-center pb' >Version 1.1.02</p>
</div>


    <Image
     src={alexz}
width={60}
height= "auto"
alt='alex logo'
priority="true"
  />
  
  
</nav>
  )
}

export default Navbar