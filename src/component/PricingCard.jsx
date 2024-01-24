import { IoMdCheckboxOutline } from "react-icons/io";

const PricingCard = ({classes , heading , pricing,list=[] })=>{

    return(
        <div className={`md:w-3/12 md:h-3/6 absolute z-10 hover:z-30 hover:scale-105
         hover:rounded-3xl rounded-3xl flex flex-col items-center
         justify-center gap-2 text-[#030803fe] font-serif p-5 drop-shadow-2xl 
         ${classes}`}>
            <h1 className="text-center font-bold md:text-4xl text-xl">{heading}</h1>
            <h1 className="text-[#fbe23b] md:text-5xl text-xl font-bold">{pricing}</h1>
            <div className="md:w-10/12 md:h-3/6 p-2 border-2 border-[#080303fe] flex justify-center
            items-center rounded-lg">
                <ol>
                  <li className="text-[#030803fe] font-bold text-xl flex item-center gap-1"> <IoMdCheckboxOutline className="text-green-300"/>Fresh</li>
                  <li className="text-[#030803fe] font-bold text-xl flex item-center gap-1"> <IoMdCheckboxOutline className="text-green-300"/>Healthy</li>
                  <li className="text-[#030803fe] font-bold text-xl flex item-center gap-1"> <IoMdCheckboxOutline className="text-green-300"/>ON-Time</li>
                  {
                    list.length!=0 && list.map((item)=>                
                        <li className="text-[#030803fe] font-bold text-xl flex item-center gap-1"> <IoMdCheckboxOutline className="text-green-300"/>{item}</li>
                    )
                  }
                  </ol>
            </div>
             <button className="bg-[#e1f9e3] font-bold text-xl
             hover:bg-green-300">chosse</button>
        </div>
    )
}

export default PricingCard