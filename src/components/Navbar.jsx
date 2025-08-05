import React , {useState} from 'react'
import {navLinks} from '../../constants/index'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
      useGSAP(() =>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top' 
                // bottom of the nav and top of the viewport
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'} , {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            duration:1,
            ease: 'power1.inOut'
        })
    })
  return (
    <nav>
        <div id='nav'>
            
            <Link to="/" className='flex  gap-2'>
            {/* <img src="/images/logo.png" alt="" /> */}
                <p>Largerthan<span className='italic'>i</span></p>
            </Link>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 focus:outline-none"
                aria-label="Toggle Menu"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Desktop Menu */}
            <ul className='hidden md:flex max-sm:flex-col'>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={`${link.id}`}>{link.title}</Link>
                    </li>
                ))}
                <li><button >Donate</button></li>
            </ul>
        </div>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.id} className="block hover:text-blue-600 transition">{link.title}</Link>
              </li>
            ))}
            <li>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border-2 transition w-full">
                Donate
              </button>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar