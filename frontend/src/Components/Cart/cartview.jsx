import { useState } from "react";

 
export const  CartView =()=>{


    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };


    return (

        <>
        
        <div> <span  className='font-bold leading-10 text-[30px] tracking-wide '>Portable Rechargeable Neck Fan USB</span></div>
                    <span className='font-bold  text-2xl text-red-800 py-5 mt-10'>Rs ,739239</span>
                    <span className='line-through text-2xl text-[#b4b4b4] mx-5 py-5 mt-10'>434</span>




     <div className="flex items-center space-x-4 my-8">
      <button
        onClick={decrement}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        className="border border-gray-400 p-2 w-16 text-center"
        readOnly
      />
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </div>
        
        </>
    )
}