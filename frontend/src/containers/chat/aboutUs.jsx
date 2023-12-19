import { AiOutlineClose } from "react-icons/ai";

export const AboutUs = ({ onOpenAboutUs }) => {
  return (
    <div className="flex flex-col w-4/12 space-y-2  py-4 -mt-4 pr-5">
      <AiOutlineClose
        className="self-end text-xs cursor-pointer "
        onClick={onOpenAboutUs}
      />
      <div className="flex flex-col space-y-5  items-center bg-white  p-5 ">
        <div className="text-xs w-full font-normal px-2 text-center bg-textSenderBG py-4 h-28 rounded-md">
          Prompt 1 The customer is very important, the customer will be followed by the customer. Aenean faucibus dictum 
        </div>
        <div className="text-xs w-full font-normal px-2 text-center bg-textSenderBG py-4 h-28 rounded-md">
          Prompt 2 The customer is very important, the customer will be followed by the customer. Aenean faucibus dictum 
        </div>
        <div className="text-xs w-full font-normal px-2 text-center bg-textSenderBG py-4 h-28 rounded-md">
          Prompt 3 The customer is very important, the customer will be followed by the customer. Aenean faucibus dictum 
        </div>
      </div>
    </div>
  );
};
