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
 
 
export const Shop = () => {

   
    const myArray = Array(10).fill(null);
    const  [allProduct ,setAllProduct]=useState([])



    useEffect(()=>{
        const fetchData = async () => {
          
    
          try {
            const response = await axios.get(ApiServer + "/api/all-product/");
    
            const responseDat = response.data;
           
            setAllProduct(responseDat)
            console.log("profile data", responseDat);
    
            // ... do something with the response data
          } catch (error) {
            // Handle error
            console.error(error);
            console.log("profile error");
            // ... handle the error
          }
        }
    
        fetchData();
      }, []);


    

    var examplelist=[
        {
            "id": "441421fd-5266-40fc-bd5d-04db99e54600",
            "images": [
                {
                    "image": "/media/images/one_Beeswax.webp"
                },
                {
                    "image": "/media/images/two_Beeswax.webp"
                },
                {
                    "image": "/media/images/three_Beeswax.webp"
                },
                {
                    "image": "/media/images/four_Beeswax.webp"
                },
                {
                    "image": "/media/images/five_Beeswax.webp"
                }
            ],
            "price": 3000,
            "discount": 1000,
            "name": "Beeswax",
            "description": "Pure Home Beeswax Polish Furniture Care Beeswax Home Cleaning",
            "created_at": "2024-01-21T18:00:33.262747Z"
        },
        {
            "id": "441421fd-5266-40fc-bd5d-04db99e54644",
            "images": [
                {
                    "image": "/media/images/one_Beeswax.webp"
                },
                {
                    "image": "/media/images/two_Beeswax.webp"
                },
                {
                    "image": "/media/images/three_Beeswax.webp"
                },
                {
                    "image": "/media/images/four_Beeswax.webp"
                },
                {
                    "image": "/media/images/five_Beeswax.webp"
                }
            ],
            "price": 5000,
            "discount": 1000,
            "name": "Electric EMS",
            "description": "Electric EMS Foot Massager Pad",
            "created_at": "2024-01-21T18:00:33.262747Z"
        }
    ]
 

    return(

<>

<AnnouncementBar/>
<Navigation></Navigation>
<div className="w-full bg-[#F2ECFF] mb-14">

    <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
            <span className="font-medium">
                Shop
            </span>
        </div>
       
            <Social 
            height="6"
            width="6"
            />
      

    </div>
</div>


<div className="mx-10 flex items-center justify-center py-10 mb-10">
<span className="font-bold text-[35px]">Products</span>
</div>


<div className="w-[80%] mx-auto items-center">
    <div className="flex flex-wrap">
{allProduct && allProduct.length > 0 && allProduct.map((item,index)=>(
    <div key={index} className="flex-none w-[23%] mr-4 py-2">

<OneComponent
 detail ={item}

/>
    </div>


))}
</div>

</div>




    
   







<div class="border-b border-gray-300 my-4"></div>

<FreeDlivery/>
<Footer/>
       

</>

    )


}

