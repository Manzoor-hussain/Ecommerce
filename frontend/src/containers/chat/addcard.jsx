// import { Slider } from "@material-ui/core"
import { useState } from "react"
import { Footer } from "../../Components/footer/footer"
import { AnnouncementBar } from "../../Components/navbar/announcement"
import { Navigation } from "../../Components/navbar/myNavbar"
import { ThumbSlider } from "../../Components/slider/ThumbSlider"
// import { Slider } from "../../Components/slider/slider"
import { CartView } from "../../Components/Cart/cartview"
import { ExampleComponent } from "../../Components/example/examplecomponent"

 
export const AddCard = () => {
 

    return(

<>

<AnnouncementBar/>
<Navigation></Navigation>
<div className="flex py-6 items-center justify-center my-10"></div>
{/* <Slider/> */}

<div className="mx-10 flex items-center justify-center">
   

</div>

<div className="w-[80%] mx-auto flex  my-10">
    <div className="w-1/2 h-[80vh] mr-8">
    <ThumbSlider/>
    </div>
    <div className="w-1/2 py-4 px-4">
    <ExampleComponent 
             title="Example Product Title"
             Price="12,3332"
             CrossPrice="2323"
            
            />
        
  
    </div>
    <div>
        
    </div>
   

</div>



<Footer/>
       

</>

    )


}

