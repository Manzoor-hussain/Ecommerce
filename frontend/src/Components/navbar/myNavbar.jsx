
import { NavLink } from "react-router-dom";
import { ASSETS } from "../../assets/path";
// import {SEARCH_ICON} from "../../assets/path"

export const  Navigation = ()=>{


    return (
            <>
            <div className="w-full">
                <div className="w-[80%] flex justify-between mx-auto py-4 items-center">
                <div className="">
                <NavLink to="/"> <img src={ASSETS.LOGO} className="h-6 sm:h-5 md:h-6 lg:h-8" /> </NavLink>
                </div>
                <div className="w-[27%]">
                    <ul className="flex justify-between justify-start text-md font-bold">
                        <NavLink to="/"><li className="hover:text-yellow-400 focus:outline-none focus:ring focus:border-blue-300">Home</li></NavLink> 
                      <NavLink to="/shop"><li className="hover:text-yellow-400 focus:outline-none focus:ring focus:border-blue-300">Shop</li></NavLink>  
                     
                        <NavLink to="/aboutus"><li className="hover:text-yellow-400 focus:outline-none focus:ring focus:border-blue-300">About us</li></NavLink>  
                        
                        <NavLink to="/contactus"><li className="hover:text-yellow-400 focus:outline-none focus:ring focus:border-blue-300">Contact us</li></NavLink>  
                       
                    </ul>
                </div>
                <div className="flex w-[9%] text-black justify-between items-center">
                    <div>
                        {/* <img src={ASSETS.SEARCH_ICON} alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                    </div>
                   
                    </div>

                </div>


            </div>


            <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
          
            
            </>
    )


}