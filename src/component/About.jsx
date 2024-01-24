import PricingCard from "./PricingCard"
import vegFarm from '../images/vegFarm2.jpg'
import {useScroll,useTransform,motion} from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { useRef,useState,useEffect } from 'react'
const About = ()=>
{
    const [formYposition,setFormYPosition] = useState(window.innerHeight)

    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    },[])

    const ContainerOne = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ContainerOne,
            offset:["start end","end start"]
        }
    )
    
    
    console.log(formYposition)
    const vegSpeed = useTransform(scrollYProgress,[0,1],[-formYposition,formYposition])

    return(
        <div ref={ContainerOne} className="w-screen h-screen bg-[#030803fe] flex flex-col md:flex-row relative overflow-hidden">
        <motion.div style={{y:vegSpeed}} className="z-[20] md:w-8/12 h-full relative flex justify-center items-end p-5 mb-10"> 
             <PricingCard classes="h-4/6 bg-[#67b3ff] left-[5%] md:left-[15%]" heading="SILVER" pricing='$40.99'/>
             <PricingCard classes="bg-[#288715] bottom-[15%] md:bottom-[8%] z-[25] rounded-3xl" heading="GOLD" pricing='$79.99'
              list={['Free delivery']}/>
             <PricingCard classes="bg-[#67b3ff] right-[5%] md:right-[15%]" heading="PLATINAM" pricing='$99.99'
             list={['Free delivery','More Offers']}/>
        </motion.div>
            <img src={vegFarm} alt="vegFarm" className="absolute z-[5] md:w-8/12 md:h-full h-3/6 opacity-50"/>
            <div className="md:w-4/12 h-full"></div>
        </div>
    )
}

export default About