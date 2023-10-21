import React from 'react'
import ups from '../components/images/ups.png'
import { Link } from 'react-router-dom'

export default function Navi() {
  return (
    <div className='md:w-auto md:h-auto'>
        <div className="bg-white ">
            <nav className="bg-white relative h-24 border-2 border-shadow-gray-500">
            <Link to='/'>
                <img src={ups} alt="im" className="translate-y-6 h-14 translate-x-56"/>
            </Link>
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box translate-x-80 -translate-y-8">
                    <li className='text-xl'><Link to="/login">Shipping</Link></li>
                    <li className='text-xl'><Link to="/login">Tracking</Link></li>
                    <li className='text-xl'><Link href='www.google.com'>Business Solutions</Link></li>
                    <li className='text-xl'><button><Link href='www.google.com'>Support</Link></button></li>
                </ul>
            <div  className="flex h-12 justify-end">
            <Link to='/login'>
                <button className="-translate-y-20 mr-10 bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24">Login</button>
            </Link>
            </div>
            </nav>
            
        </div>
    </div>
  )
}
