import React from 'react'
import {navLinks} from '../../constants/index'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';

const Navbar = () => {
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
            backgroundFilter: 'blur(10px)',
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

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={`${link.id}`}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <button>Donate</button>
        </div>
    </nav>
  )
}

export default Navbar