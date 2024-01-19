import { useState } from "react";



export const increment =()=>{


    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };


    return (

        <>


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