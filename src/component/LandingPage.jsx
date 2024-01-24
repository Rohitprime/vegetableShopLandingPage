import {useScroll,useTransform,motion} from 'framer-motion'
import vegetableLogo from '../images/vegl.png'
import vegWithBox from '../images/vegWithBox.jpg'
import { useEffect, useRef,useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LandingPage = ()=>{
    const [formYposition,setFormYPosition] = useState(window.innerHeight)
    const ContainerOne = useRef(null)

    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    },[])

    const {scrollYProgress} = useScroll(
        {
            target:ContainerOne,
            offset:["start start","end start"]
        }
    )
    
    
    console.log(formYposition)
    const vegSpeed = useTransform(scrollYProgress,[0,1],[0,formYposition])

    return(
     
          <div ref={ContainerOne} className="w-screen h-screen flex md:flex-row flex-col relative">
             <div className="w-full md:w-8/12 h-full relative flex flex-col items-end justify-center gap-2 
              overflow-hidden ">
                <motion.div style={{x:vegSpeed}} className='w-4/5 md:w-3/6 flex flex-col items-center p-5 -space-y-4 mr-5'>
                    <h1 className='text-[#45ff16fe] font-bold font-serif text-6xl'>Fresh</h1>
                    <h1 className='text-white font-bold font-serif text-6xl md:text-9xl border-b-8 md:w-full
                     border-b-[#45ff16fe]'>Vegetablels</h1>
                </motion.div>
                <motion.div style={{y:vegSpeed}} className='p-5  md:w-3/6 border-[#45ff16fe] mr-5 text-center'>
                     <p className='text-2xl text-white p-2'>over <span className='text-6xl font-bold'>250000+</span>  happy :) customers.</p>
                     <p className='text-2xl text-white p-2'>Cucumbers are one of the only veggies you can’t cook, and always eat raw.</p>
                 
                 </motion.div>
                   <img src={vegWithBox} alt="vegetables" className='absolute w-full h-full -z-10 opacity-50' />
             </div>

             <motion.div style={{y:vegSpeed}} className="md:w-4/12 h-full bg-[#2e9515fe] flex justify-center
               z-[100]">
                <div className='md:w-11/12 flex flex-col justify-center items-center'>
                    <div className='w-6/12   h-1/6 flex items-center gap-1 mr-5'>
                        <img src={vegetableLogo} alt="vegetableLogo" className='w-24 h-24 md:w-36 md:h-36 p-2 bg-black rounded-full'/>
                        <h4 className='text-3xl font-bold font-serif text-white'>Daily Fresh</h4>
                </div>
                <div className=' md:w-11/12   flex flex-col items-center p-2'>
                     <h4 className='text-2xl text-white font-bold font-serif'>Sign-up now to enjoy</h4>
                      <h1 className='text-7xl text-white font-bold font-serif'> $50 OFF</h1>
                      <h4 className='text-2xl text-white font-bold font-serif'>On our Freshly plucked vegetables.</h4>
                      <h4 className='text-2xl font-bold font-serif text-white'>Eat Healthy - be Healthy</h4>
                </div>
                    <div className=' md:w-8/12  md:h-1/6 flex flex-col justify-center items-center gap-2'>
                        <input type="text" className='w-11/12 rounded-lg h-12 bg-white text-center text-black' placeholder='Email'/>
                        <button className='w-11/12 rounded-lg h-12'>continue</button>
                    </div>
                </div>
             </motion.div>
          </div>
        
    )
}

export default LandingPage