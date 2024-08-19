import React,{useRef} from 'react'
import gsap from 'gsap';
import ChildLoader from './childLoader.jsx';
import { useGSAP } from '@gsap/react';
const ParentLoader = () => {
  const parentLoadRef = useRef("null");
    useGSAP(()=>{
      gsap.to(parentLoadRef.current,{
        display:'none',
        delay:2
      })
  })
  return (
    <div ref={parentLoadRef} className='h-1 w-full bg-green-900 fixed z-30 '>
    <ChildLoader/>
    </div>
  )
}

export default ParentLoader;
