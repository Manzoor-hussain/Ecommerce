// import { Slider } from "@material-ui/core"
import { useState } from "react"
import { Footer } from "../../Components/footer/footer"
import { AnnouncementBar } from "../../Components/navbar/announcement"
import { Navigation } from "../../Components/navbar/myNavbar"
import { ThumbSlider } from "../../Components/slider/ThumbSlider"
import { Slider } from "../../Components/slider/slider"
import { CartView } from "../../Components/Cart/cartview"


 
export const HomePage = () => {
 

    return(

<>

<AnnouncementBar/>
<Navigation></Navigation>
<div className="flex py-6 items-center justify-center my-10"><h2 className="font-bold text-xl ">Trending Now</h2></div>
<Slider/>

<div className="mx-10 flex items-center justify-center">
    <h1>My name is khan</h1>

</div>

<div className="w-[80%] mx-auto flex  my-10">
    <div className="w-1/2 h-[80vh]">
    <ThumbSlider/>
    </div>
    <div className="w-1/2 py-4 px-4">
        <CartView/>
  
    </div>
    <div>
        
    </div>
   

</div>



<Footer/>
       

</>

    )


}

