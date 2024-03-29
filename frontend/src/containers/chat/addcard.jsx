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
 

export const AddCard = () => {

    const { productId } = useParams();
    const [SingleProduct ,setSingleProduct] = useState([])




    useEffect(() => {
        const onSelectedConversation = async (id) => {
          try {
           
            const response = await axios.get(ApiServer + '/api/single-product/' +id);
            if (response) {
            //   const targetConversation = userConversation.find(conversation => conversation.id === id);
    
              // setslowText(false);
              console.log("CHAT Response", response.data);
              console.log("target Conversation", );
            setSingleProduct(response.data)

           
            }
          } catch (error) {
            console.log("Selected error hai ,with id",id)
            console.error(error);
          }
        };
        console.log("product id",productId)
    
        onSelectedConversation(productId); // Assuming agent_typee is accessible in this scope
      }, [productId]);


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
                Home
            </span>
        </div>
       
            <Social 
            height="6"
            width="6"
            />
      

    </div>
</div>


<div className="mx-10 flex items-center justify-center">
   

</div>

<div className="w-[80%] mx-auto flex  my-10">
    <div className="w-1/2 h-[80vh] mr-8">
    {SingleProduct && (
  <ThumbSlider
    all_images={SingleProduct.images}
  />
)}
    </div>
    <div className="w-1/2 py-4 px-4">
    <ExampleComponent 
             title={SingleProduct ? SingleProduct.name : ""}
             Price={SingleProduct ? SingleProduct.price : ""}
             CrossPrice={SingleProduct ? SingleProduct.discount : ""}
            
            />
    <Increment/>
    <CartButton></CartButton>
    {SingleProduct&&
     <OrderButton 
     SingleProduct = {SingleProduct}
     />
    }
   
        
  
    </div>
    <div>
        
    </div>
   

</div>


<div class="border-b border-gray-300 my-4"></div>


<div className="flex py-6 items-center justify-center my-10"><h2 className="font-bold text-xl ">Recommended for you</h2></div>
<Slider
allProduct={examplelist}

/>


<div class="border-b border-gray-300 my-4"></div>

<FreeDlivery/>
<Footer/>
       

</>

    )


}

