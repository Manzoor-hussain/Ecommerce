import React, { useEffect, useState } from 'react';
import { ASSETS } from '../../assets/path';
import { ApiServer } from '../../ApiConstant';
import axios from 'axios';


const MeetingModal = ({ modalOpen, setModalOpen, onClose, SingleProduct}) => {

    const [formData, setFormData] = useState({
        name: '',
        mobile:'',
        address: '',
        province:'',
        district:'',

      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
      
    //     // Convert the value to an integer if the field is 'mobile'
    //     const parsedValue = name === 'mobile' ? parseInt(value, 10) : value;
      
    //     setFormData({
    //       ...formData,
    //       [name]: parsedValue,
    //     });
    //   };

      const PlaceOrder = async (updatedFormData) => {
          
    
        try {
          const response = await axios.post(ApiServer + "/api/place-order/" ,{
            updatedFormData
          });
  
          const responseDat = response.data;
         
          
          console.log("profile data", responseDat);
          alert("Your Order Submitted")
  
          // ... do something with the response data
        } catch (error) {
          // Handle error
          console.error(error);
          console.log("profile error");
          // ... handle the error
        }
      }
  
     
      const handleSubmit = (e) => {
        e.preventDefault();

        // Replace this with your actual form submission logic
       
        const updatedFormData = {
            ...formData,
            product: SingleProduct.id, 
            TotalPrice:SingleProduct.price,
            quentity:1
            
          };
        console.log('Form data submitted:', updatedFormData);
        setModalOpen(!modalOpen)
        console.log('Form data submitted:', formData);
        PlaceOrder(updatedFormData)
      };




    useEffect(() => {
        console.log("modal open", modalOpen)
        const handleClickOutside = (event) => {
            if (modalOpen && event.target && !event.target.closest(".modal-contentt") && !event.target.closest(".modal-content")) {

                console.log("match", modalOpen)
                const delay = 10000;
                onClose()


            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [modalOpen]);

    return (
        <>
            {/* {isVisible && ( */}
            <div className="fixed top-1 inset-0 z-50  flex items-center justify-center bg-gray-400 bg-opacity-50 ">
                <div className="bg-[#FFFFFF] p-8 rounded-md shadow-md w-[45%] overflow-y-auto h-[600px]">
                    <div className='flex justify-between'>
                        <h2 className="text-lg font-bold  text-gray-800  mb-2  hover:text-blue">CASH ON DELIVERY</h2>
                        <button
                            className="text-gray-800 font-bold hover:text-gray-700"
                            style={{ left: '68%' }}
                            onClick={() => setModalOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className='modal-contentt'>

                        <div class="border-b border-gray-300 my-4"></div>


                        <div className='flex justify-between items-center'>
                            <img src={ApiServer + SingleProduct.images[0].image} className=" sm:h-5 md:h-10 lg:h-20 lg:w-25 mr-3 rounded-md" />
                            <p className="font-bold text-gray-800 w-[60%]">
                                {SingleProduct.name}</p>
                            <p className='font-bold text-gray-800 '>Rs, {SingleProduct.price}</p>


                        </div>
                        <div class="border-b border-gray-300 my-4"></div>




                        <div className='bg-[#ebebeb] rounded-md py-2 px-4'>
                            <div className='flex justify-between py-1'>
                                <p className='font-medium text-gray-800 '>Sub Total</p>
                                <p className='font-bold text-gray-800 '> {SingleProduct.price} Rs</p>
                            </div>
                            <div className='flex justify-between py-1'>
                                <p className='font-medium text-gray-800 '>Shipping</p>
                                <p className='font-bold text-gray-800 '> Free</p>
                            </div>
                            <div class="border-b border-gray-300 my-2"></div>
                            <div className='flex justify-between py-2'>
                                <p className='font-bold text-gray-800 '>Total</p>
                                <p className='font-bold text-gray-800 '> {SingleProduct.price}</p>
                            </div>
                        </div>



                        {/* New Shipping Method */}
                        <div className='py-2'>
                            <p className='font-bold text-gray-800 py-2' >Shipping Method</p>
                            <div className='border border-solid  rounded-md border-gray-400 p-3 flex justify-between'>

                                <div class="flex items-center">
                                    <input type="checkbox" id="roundedCheckbox" class="hidden" />
                                    <label for="roundedCheckbox" class="flex items-center cursor-pointer">
                                        <div class="w-4 h-4 border rounded-full border-gray-400 border-solid bg-black flex items-center justify-center">
                                            <svg fill="black" class=" hidden w-4 h-4 text-green-500 b pointer-events-none" viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-2 text-gray-700 ">Free Shipping</span>
                                    </label>
                                </div>

                                <p className='font-bold text-gray-800'>Free</p>

                            </div>
                        </div>
                        {/* Nex taprt  */}



                        <p className='py-4 flex justify-center text-lg font-bold text-gray-800'>Enter your shipping address</p>



                        <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="flex items-center border rounded-md">
                            <span className="text-gray-500 bg-gray-100 py-3 px-3 ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#b38080"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#222222"></path> </g></svg>
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name..."
                                className="outline-none focus:outline-none  flex-grow pl-2"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center border rounded-md my-4">
                            <span className="text-gray-500 bg-gray-100 py-3 px-3 ">
                                <svg fill="#000000" className='h-5 w-5' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m77.7 63.9l-6.2-5c-2.1-1.7-5.1-1.8-7.3-0.2l-5.9 4.3c-0.8 0.6-1.9 0.5-2.6-0.2l-9.7-8.8-8.9-9.8c-0.7-0.7-0.8-1.8-0.2-2.6l4.3-5.9c1.6-2.2 1.5-5.2-0.2-7.3l-5-6.2c-2.2-2.8-6.4-3-8.9-0.5l-5.4 5.4c-1.2 1.2-1.8 2.9-1.8 4.5 0.7 12.7 6.5 24.8 15 33.3s20.5 14.3 33.3 15c1.7 0.1 3.3-0.6 4.5-1.8l5.4-5.4c2.7-2.4 2.4-6.6-0.4-8.8z"></path></g></svg>
                            </span>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                pattern="^\d{11}$"
                                placeholder="Enter Your Phone Number..."
                                className="outline-none focus:outline-none  flex-grow pl-2"
                                title="Please enter a valid 11-digit phone number."
                                required
                            />
                        </div>
                        {/* Province */}

                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-white border border-gray-100 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="dropdown"
                                name="province"
                                onChange={handleChange}  
                                value={formData.province}   
                            >
                                <option value="" disabled selected>Select Province</option>
                                <option value="punjab">Punjab</option>
                                <option value="sindh">Sindh</option>
                                <option value="khyber">Khyber Pakhtunkhwa</option>
                                <option value="balochistan">Balochistan</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 12l-7-7 1.41-1.41L10 9.17l5.59-5.58L17 5z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* City */}
                        <div className="flex items-center border rounded-md my-4">
                            <span className="text-gray-500 bg-gray-100 py-3 px-3 ">
                                <svg fill="#000000" className="w-5 h-5" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.90625 -0.03125C24.863281 -0.0234375 24.820313 -0.0117188 24.78125 0C24.316406 0.105469 23.988281 0.523438 24 1L24 4.0625C19.867188 4.53125 16.546875 7.839844 16.0625 11.96875L16 11.96875C15.925781 11.960938 15.855469 11.960938 15.78125 11.96875C15.25 12.070313 14.886719 12.5625 14.945313 13.101563C15.003906 13.636719 15.460938 14.042969 16 14.03125L16 22.5L18 21.6875L18 14.03125L20 14.03125L20 20.90625L22 20.1875L22 14.03125L24 14.03125L24 19.40625L25 19L26 19.40625L26 14.03125L28 14.03125L28 20.1875L30 20.90625L30 14.03125L32 14.03125L32 21.6875L34 22.5L34 14.03125C34.402344 14.085938 34.800781 13.902344 35.019531 13.5625C35.238281 13.21875 35.238281 12.78125 35.019531 12.4375C34.800781 12.097656 34.402344 11.914063 34 11.96875L33.9375 11.96875C33.453125 7.839844 30.132813 4.53125 26 4.0625L26 1C26.011719 0.710938 25.894531 0.433594 25.6875 0.238281C25.476563 0.0390625 25.191406 -0.0585938 24.90625 -0.03125 Z M 24.8125 6C24.917969 6.015625 25.019531 6.015625 25.125 6C25.15625 6 25.1875 6 25.21875 6C28.605469 6.105469 31.273438 8.691406 31.78125 11.96875L18.21875 11.96875C18.730469 8.679688 21.410156 6.089844 24.8125 6 Z M 24.875 21C24.800781 21.011719 24.726563 21.035156 24.65625 21.0625L5.65625 28.375C5.261719 28.519531 5 28.894531 5 29.3125L5 33C5 33.550781 5.449219 34 6 34L7 34L7 49C7 49.550781 7.449219 50 8 50L19.3125 50C19.863281 50 20.3125 49.550781 20.3125 49L20.3125 43.59375C20.3125 41.339844 21.777344 39.28125 23.96875 38.875C23.980469 38.875 23.988281 38.875 24 38.875C27.019531 38.289063 29.59375 40.515625 29.59375 43.40625L29.59375 49C29.59375 49.550781 30.042969 50 30.59375 50L42 50C42.550781 50 43 49.550781 43 49L43 34L44 34C44.550781 34 45 33.550781 45 33L45 29.3125C45 28.894531 44.738281 28.519531 44.34375 28.375L25.34375 21.0625C25.195313 21.003906 25.035156 20.984375 24.875 21 Z M 25 23.0625L43 29.96875L43 32L8.1875 32C8.054688 31.972656 7.914063 31.972656 7.78125 32L7 32L7 29.96875 Z M 9 34L41 34L41 48L31.59375 48L31.59375 43.40625C31.59375 39.308594 27.792969 36.117188 23.625 36.90625C23.613281 36.910156 23.605469 36.902344 23.59375 36.90625C20.402344 37.511719 18.3125 40.460938 18.3125 43.59375L18.3125 48L9 48Z"></path></g></svg>
                            </span>
                            <input
                                type="text"
                                name="district"
                                value={formData.district}
                                required
                                onChange={handleChange}
                                placeholder="Enter Your District..."
                                className="outline-none focus:outline-none  flex-grow pl-2"
                            />
                        </div>
                        {/* Address */}

                        <div className="flex items-center border rounded-md my-4">
                            <span className="text-gray-500 bg-gray-100 py-3 px-3 ">
                                <svg className="h-5 w-5" viewBox="-266.24 -266.24 1556.48 1556.48" fill="#000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill=""></path></g></svg>
                            </span>
                            <input
                                type="address"
                                name="address"
                                required
                                onChange={handleChange}
                                value={formData.address}
                                placeholder="Enter Your Addresss..."
                                className="outline-none focus:outline-none  flex-grow pl-2 text-gray-400"
                            />
                        </div>



                        {/* Submit */}

                        <div className="flex items-center justify-center w-full text-white  bg-black  gap-4 text-center py-4 rounded-md font-bold mt-10 ">

                            <button type='submit' >BUY NOW</button>
                        </div>
                        </form>
                    </div>
                  

                </div>
            </div>

        </>
    );
};

export default MeetingModal;
