import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const ChildLoader = () => {
    const lineRef = useRef(null);
    useGSAP(()=>{
        gsap.to(lineRef.current,{
            width: "100%",
            duration: 2,
            yoyo: true,
            ease: "power2.out"
            
        })
    })
  return (
    <div ref={lineRef} className='h-full w-0 bg-zinc-500'>
    </div>
  )
}

export default ChildLoader;
