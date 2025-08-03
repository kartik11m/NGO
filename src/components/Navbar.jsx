import React from 'react'
import {navLinks} from '../../constants/index'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration:1,
            ease: 'power1.inOut'
        })
    })
  return (
    <nav>
        <div>
            <a href="#home" className='flex  gap-2'>
                {/* <img src="/images/logo.png" alt="" /> */}
                <p>Largerthan<span className='italic'>i</span></p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>

            <button>Donate</button>
        </div>
    </nav>
  )
}

export default Navbar