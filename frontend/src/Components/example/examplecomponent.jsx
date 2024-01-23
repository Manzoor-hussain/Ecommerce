import { CartView } from "../Cart/cartview"
import { ThumbSlider } from "../slider/ThumbSlider"



export const ExampleComponent = ({title , Price ,CrossPrice})=>{

    return(

        <>
   
    <div> <span  className='font-bold leading-10 text-[30px] tracking-wide mb-10 '>{title}</span></div>
                    <span className='font-bold  text-2xl text-red-800 '>Rs ,{Price}</span>
                    <span className='line-through text-2xl text-[#b4b4b4] mx-5 py-5 mt-14'>{CrossPrice}</span>

            
               


    
  
    
    
        

   


        </>
    )
}

