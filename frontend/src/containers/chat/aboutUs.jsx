// import { Slider } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Footer } from "../../Components/footer/footer"
import { AnnouncementBar } from "../../Components/navbar/announcement"
import { Navigation } from "../../Components/navbar/myNavbar"
import { ThumbSlider } from "../../Components/slider/ThumbSlider"
// import { Slider } from "../../Components/slider/slider"
import { CartView } from "../../Components/Cart/cartview"
import { ExampleComponent } from "../../Components/example/examplecomponent"
import { Increment } from "../../Components/Cart/increment"
import { CartButton } from "../../Components/Button/CartButton"
import { OrderButton } from "../../Components/Button/OrderButton"
import { Social } from "../../Components/Cart/social"
import { Slider } from "../../Components/slider/slider"
import axios from "axios"
 import { FreeDlivery } from "../../Components/footer/foooterup"
 import { useParams } from 'react-router-dom';
import { ApiServer } from "../../ApiConstant"
import { OneComponent } from "../../Components/slider/oneComponent"
 
 
export const About  = () => {

   
 

    return(

<>

<AnnouncementBar/>
<Navigation></Navigation>
<div className="w-full bg-[#F2ECFF] mb-14">

    <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
            <span className="font-medium">
                About
            </span>
        </div>
       
            <Social 
            height="6"
            width="6"
            />
      

    </div>
</div>


<div className="mx-10 flex items-center justify-center py-6 mb-10">
<span className="font-bold text-[35px]">About US</span>
</div>


<div className="w-[60%] mx-auto items-center py-5">
  <p className="text-gray-700">
  Welcome to Sasta Bazar, your one-stop solution provider. We are an online store dedicated to offering problem-solving products that cater to your everyday needs.<br></br>
  <br></br>
At Sasta Bazar, we believe in the power of finding effective solutions for common challenges. Our carefully curated collection consists of innovative products designed to make your life easier, more convenient, and more enjoyable.
<br className="py-4"></br><br></br>
Our mission is to provide you with a seamless shopping experience, offering a wide range of high-quality items that address specific problems you may encounter. Whether you're looking for practical gadgets, useful tools, or unique accessories, we have you covered.
<br className="py-4"></br> <br></br>
We take pride in our commitment to delivering exceptional customer service. Our team is passionate about helping you find the perfect product to meet your needs, and we are always ready to assist you with any inquiries you may have. Your satisfaction is our top priority.
<br></br> <br></br>
By offering exclusive items, we aim to provide you with unique solutions that stand out from the crowd.
<br></br> <br></br>
Discover the innovative and practical products available at Theshopier.com today. We are excited to be part of your journey in finding the perfect solutions for your everyday challenges. Shop with us and experience the convenience and satisfaction of shopping at Sasta Bazar.
    </p>
    


</div>





    
   







<div class="border-b border-gray-300 my-4"></div>

<FreeDlivery/>
<Footer/>
       

</>

    )


}

