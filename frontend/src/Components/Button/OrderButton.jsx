import { useState } from "react"
// import { OrderModal } from "../modal/OrderModal"
import  {SubscriptionModal} from "../modal/SubscriptionModal"
import MeetingModal from "../modal/OrderModal"
export const OrderButton =({SingleProduct})=>{
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log("Click open")
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("Click False")
  };


    return (
        <>


        {/* animate-bounce */}
           <div className="modal-content flex items-center justify-center w-full text-[#260759] bg-green-300  gap-4 text-center py-4 rounded-md font-bold mt-10 animate-bounce">
           <svg className="w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.08"></g><g id="SVGRepo_iconCarrier"> <title>shopping_bag [#1142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3079.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M302,2936.00957 C302,2936.55981 301.552,2937.00638 301,2937.00638 L287,2937.00638 C286.448,2937.00638 286,2936.55981 286,2936.00957 L286,2928.03509 C286,2927.48485 286.448,2927.03828 287,2927.03828 L301,2927.03828 C301.552,2927.03828 302,2927.48485 302,2928.03509 L302,2936.00957 Z M294,2920.98465 C296.259,2920.98465 298.221,2923.05104 298.813,2925.04466 L289.096,2925.04466 C289.543,2923.05104 291.604,2920.98465 294,2920.98465 L294,2920.98465 Z M302,2925.04466 L300.876,2925.04466 C300.265,2922.05423 297.367,2919 294,2919 C290.53,2919 287.56,2922.05423 287.077,2925.04466 L286,2925.04466 C284.895,2925.04466 284,2926.00159 284,2927.10207 L284,2937.07018 C284,2938.17165 284.895,2939 286,2939 L302,2939 C303.105,2939 304,2938.17165 304,2937.07018 L304,2927.10207 C304,2926.00159 303.105,2925.04466 302,2925.04466 L302,2925.04466 Z" id="shopping_bag-[#1142]"> </path> </g> </g> </g> </g></svg>
                    <button  onClick={openModal}>Order now - Cash on Delivery</button>
                    </div>









{isModalOpen && (


<MeetingModal    modalOpen={openModal} setModalOpen={setModalOpen} onClose={closeModal}  SingleProduct={SingleProduct} >
  
   
 
</MeetingModal>


)

};

                  


                
{/* 
                    <OrderModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>Modal content goes here.</p>
      </OrderModal> */}


{/* 
                    {isModalOpen && (
               <SubscriptionModal
               type={1}
               onClick={() => setIsModalOpen(!isModalOpen)}
             />
      )} */}
        
        </>


    )
}