import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const Black = () => {
    const blackRef = useRef(null);
    const BlackSreenRef = useRef(null);

    useGSAP(()=>{
        gsap.to(blackRef.current,{
            top:"-100%",
            duration: 1.5,
            delay: 2,
            yoyo: true,  // For continuous animation
            ease: "slow(0.1,1,true).out",
        });
        gsap.from(BlackSreenRef.current,{
            opacity:0,
            delay:1,
            duration: 2,
            fontFamily: "a4"
        });
    })
  return (
    <div ref={blackRef} className='h-screen w-full absolute bg-[#1A1A1A] z-20'>
            <h1 ref={BlackSreenRef} className='font-[MyCustomFont] absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-[50%] text-stone-200 z-50 text-7xl font-'>A<br/>R<br/>O<br/>C<br/>K</h1>
    </div>
  )
}

export default Black;
