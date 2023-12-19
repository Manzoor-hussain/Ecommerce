import { ASSETS } from "../../assets/path";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";
import { Subscribed } from "./subscribed";
import { FaRegFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBtn from "../../Components/Button/NavBtn";
//import { useDispatch, useSelector } from "react-redux";
import { Question } from "../../redux/actions/QuestionActions";
import { useEffect, useState } from "react";
//import { Tooltip } from 'react-tooltip';
import { ChatTooltip } from "../../Components/Charts/tooltip";

export const ChatBox = ({
  selectedUser,
  activeTab,
  setActiveChat,
  submitHandler,
  newMessage,
  chatWith,
  handleThumbsUp,
  handleThumbsDown,
  user,
  messagesEndRef,
  subscribed,
  setSubscribed,
  onEnterSubmit,
  handleCloseFront,
  newChat,
  isloading,
}) => {
  const navigate = useNavigate();

  // const handleThumbsUp = (id) => {
  //   setThumbsUp(!thumbsUp);
  //   setThumbsDown(false);
  //   console.log("UP id",id)

  // };

  const handleKeyDown = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      onEnterSubmit(e);
      
      handleCloseFront();
      
    }
  };

  return (
    <div className="py-4 w-full lg:h-[64vh] 2xl:h-[70vh]">
      <div 
      className={`bg-transparent h-full flex flex-col ${newChat?'justify-end':'justify-start'}`}
      >
        <div className=" flex flex-col pt-5 text-white Exo-Regular text-sm lg:text-normal gap-2  overflow-auto scroll-[#ccc]  scroll-smooth  px-8 ">
          {newChat ? (
            <div className="flex justify-center items-center">
               <div className="w-[80%] text-black">
         
              <button
                type="button"
                className="lg:w-[24.5rem] 2xl md:w-[8rem]  m-2 rounded-xl text-left text-gray border dark:border-none p-3 hover:bg-slate-50 dark:bg-[#6B6B6B] dark:hover:bg-[#5f5f5f] dark:text-black"
              >
                <div className="font-medium text-sm">Give me ideas</div>
                <div className="font-normal text-sm mt-[10px]">For what to do with my kid’s art</div>
              </button>
        


            
              <button
                type="button"
                className="lg:w-[24.5rem] 2xl md:w-[8rem]  m-2 rounded-xl text-left text-gray border dark:border-none p-3 hover:bg-slate-50 dark:bg-[#6B6B6B] dark:hover:bg-[#5f5f5f] "
              >
                <div className="font-medium text-sm">Design a database schema</div>
                <div className="font-normal text-sm mt-[10px]">For an online merch store </div>
              </button>
     


           
              <button
                type="button"
                className="lg:w-[24.5rem] 2xl md:w-[8rem]  m-2 rounded-xl text-left text-gray border dark:border-none p-3 hover:bg-slate-50 dark:bg-[#6B6B6B] dark:hover:bg-[#5f5f5f] dark:text-white"
              >
                <div className="font-medium text-sm">Compare design principles</div>
                <div className="font-normal text-sm mt-[10px]">For mo
                bile apps and desktop software</div>
              </button>
           


           
              <button
                type="button"
                className="lg:w-[24.5rem] 2xl md:w-[8rem]  m-2 rounded-xl text-left text-gray border dark:border-none p-3 hover:bg-slate-50 dark:bg-[#6B6B6B] dark:hover:bg-[#5f5f5f] dark:text-white"
              >
                <div className="font-medium text-sm">Makeup a story</div>
                <div className="font-normal text-sm mt-[10px]">About Sharky, a tooth-brushing shark superhero</div>
              </button>
            
          {/* )} */}
        </div>

            
              
              
            </div>
          ) : (
            <>
              {chatWith?.map((items, id) => (
                <div
                  key={id}
                  className={`flex flex-row  items-center gap-2 flex-col`}
                >
                  

                  <div className="flex flex-col gap-5 mb-5 text-black w-4/5">
                  {items?.question && (
                      <div className="space-y-1.5  py-6 px-4 rounded-full ">
                        <div className="flex items-center space-x-3 mr-8">
                         
                           
                           <div className="flex items-center justify-center w-7 h-7 rounded-full border-2 p-4">
  <div className="text-center ">
    { user.slice(0, 2).toUpperCase()}
  </div>
</div>


                          <div
                            // ref={messagesEndRef}
                            
                            className={`px-4 py-1.5 rounded-md bg-textSenderBG w-full mr-10
                             
                            `}
                          >
                           
                              
                              {items?.question}
                          
                         
                          </div>

                         
                             
                          
                        </div>
                       
                      </div>
                    )}






                 
                    {items?.answer && (
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-3">
                         
                            <img
                              src={ASSETS.PROFILES.ROBO}
                              alt=""
                              className="ml-5 w-7 h-7 rounded-full object-contain"
                            />
                          

                          <div
                            ref={messagesEndRef}
                            className={`px-4 py-1.5  w-full rounded-md bg-textUserBG
                             
                                // ? "bg-textSenderBG"
                            
                            `}
                          >
                           
                              
                              {items?.answer}
                          
                         
                          </div>

                         
                              <div className="mr-2 flex items-center space-x-1">
                             
                                <span
                                  className={`hover:scale-110 ${
                                    items.status == 1 ? "text-green-600" : ""
                                  }`}
                                  onClick={() => handleThumbsUp(items.id)}
                                >
                                  <RiThumbUpLine />
                                </span>
                                <span
                                  className={`hover:scale-110 ${
                                    items.status == 0 ? "text-red-500" : ""
                                  }`}
                                  onClick={() => handleThumbsDown(items.id)}
                                >
                                  <RiThumbDownLine />
                                </span>
                              </div>
                          
                        </div>
                       
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        id="messageForm"
        className=" py-10 px-5 w-full "
      >
        <div className="p-5 h-16 w-[80%] mx-auto  flex  rounded-md border border-gray-300  justify-between items-center">
          <textarea
            type="text"
            name="question"
            ref={newMessage}
            onKeyDown={handleKeyDown}
            className="outline-none w-full bg-transparent  border-0  placeholder:text-gray-extraLight text-sm Exo-Regular resize-none"
            placeholder="Write your message here..."
          />
            {isloading ?(
             <div className="flex items-center justify-center h-screen animate-dots">
             <div className="dot bg-blue-500 h-2 w-2 rounded-full mx-1"></div>
             <div className="dot bg-blue-500 h-2 w-2 rounded-full mx-1"></div>
             <div className="dot bg-blue-500 h-2 w-2 rounded-full mx-1"></div>
           </div>
          ):
          <button
            type="submit"
           
            className={`font-semibold rounded-md h-7 w-28 text-sm md:text-normal  bg-aqua  'bg-gray-500':'bg-aqua'} `}
          >
            Send
          </button>
}
        </div>
      </form>
    </div>
  );
};
