import React from 'react'
import ups from '../components/images/ups.png'
import user from '../components/images/u.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='md:w-auto md:h-auto'>
          <div className="bg-white ">
          <nav className="bg-white fixed relative h-24 border-2 border-shadow-gray-500">
          <Link to='/'>
            <img src={ups} alt="im" className="translate-y-6 h-14 translate-x-56"/>
          </Link>
          <ul className="menu menu-vertical lg:menu-horizontal rounded-box translate-x-80 -translate-y-8 ">
                    <li className='text-xl'><Link to="/login" >Shipping</Link></li>
                    <li className='text-xl'><Link to="/login">Tracking</Link></li>
                    <li className='text-xl'><Link href='www.google.com'>Business Solutions</Link></li>
                    <li className='text-xl'><button><Link href='www.google.com'>Support</Link></button></li>
          </ul>
            <div  className="h-12 flex justify-end ">
                <img src={user} alt="i" className=" h-8 -translate-y-20 flex justify-center mr-40 bg-yellow-400 rounded-full"/>
                <p className="font-sans -translate-x-40 ml-2 mt-1 -translate-y-20" >ADMIN</p>
            </div>
          </nav>
          
         </div>
       </div>
  )
}
