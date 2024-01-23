import { useState } from "react";



export const Increment =()=>{


    const [count, setCount] = useState(1);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
        if (count>1)
        {
            setCount(count - 1);
        }
      
    };


    return (

        <>


<div className="flex items-center  my-8">
      <button
        onClick={decrement}
        className="bg-gray-400 text-white px-4 py-2 rounded"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        className="border-none border-gray-400 p-2 w-full bg-gray-200 text-center"
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