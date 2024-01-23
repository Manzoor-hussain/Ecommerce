import { useEffect, useRef, useState } from "react";
import { ChatBox } from "./chatbox";
import Navbar from "../../Components/navbar/Navbar";
import AttentionNote from "../../Components/AttentionNote/AttentionNote";
import Button from "../../Components/Button/Button";
import { Faq } from "./faq";
// import { AboutUs } from "./aboutus";
import { UserUpdate } from "./userProfile";
//import { useLocation } from "react-router-dom";
import { SubUnsubUsers } from "./SubUnsubUsers";
import { SubscriptionModal } from "../../Components/modal/SubscriptionModal";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";
import { ImBin } from "react-icons/im";
//import { useDispatch, useSelector } from "react-redux";
//import { Question } from "../../redux/actions/QuestionActions";
//import { GetSubciberAction } from "../../redux/actions/AdminActions";
import { ApiServer } from "../../ApiConstant";
import axios from "axios";
import { Subscribed } from "./subscribed";
import { ChatTooltip } from "../../Components/Charts/tooltip";
import { Client, Databases, Query, Account } from "appwrite";
import { useSelector } from "react-redux";
import Carousel from "../../Components/Carousel/Carousel"
export const ChatComponent = () => {
  
  const messagesEndRef = useRef(null);
  const promptRef = useRef(null);
  const newMessage = useRef(null);
  const [showFaqs, setShowFaqs] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [PromtLimitmodal, setPromtLimitmodal] = useState(false);
  const [chatWith, setChatWith] = useState([]);
  const [promptchat, setPromptChat] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { username } = userLogin;
  const [user, setUser] = useState({
    email: username,
  });

  const [subscribed, setSubscribed] = useState(null);
  const [subsInfoModal, setSubsInfoModal] = useState(true);
  const [prompts, setPrompts] = useState([]);
  //const location = useLocation();
  const [promptSelected, setPromptSelected] = useState(null);
  const [editPromptSelected, setEditPromptSelected] = useState(false);
  const [editPromptText, setEditPromptText] = useState();

  const [NumberofSubcriber, setNumberofSubcriber] = useState("20");
  const [NumberofUnsubcriber, setNumberofUnsubcriber] = useState(2);
  const [question, setQuestion] = useState(0);
  const [textt, setTextt] = useState(null);
  const [check, setCheck] = useState(4);
  //const dispatch = useDispatch();
  const [ipAddress, setIPAddress] = useState("");
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [count, setcount] = useState(0);
  const [conversation,setconversation] =useState([])
  const [newChat,setnewChat] =useState(true)
  const [isloading,setisloading]= useState(false)



  useEffect(() => {
    const fetchConversationData = async () => {
      try {
        // const response = await axios.get(ApiServer + '/api/admin/conversation/'+{username});
        var formdata=new FormData()
        formdata.append("user",username)
        const response = await axios.post(ApiServer +"/api/admin/conversationn/" ,formdata)
         //  `/api/admin/conversationn/${username}`);
        if (response) {

          setconversation(response.data.data)
          
          setPrompts(response.data.data)
        }
      } catch (error) {
        // Handle error
        console.error(error);
        
        //alert(error)
        // ... handle the error
      }
    };

    fetchConversationData();
  }, []);
  const onSelectedConversation = async (id,conversation_name)=>{
     var formdata=new FormData()
     formdata.append("id",id)
    try {
      setnewChat(false)
      const response = await axios.post(ApiServer + '/api/admin/chat/',formdata);
      if (response) {

        setChatWith(response.data)
        setPromptSelected(id);
        setEditPromptSelected(true)
        setEditPromptText(conversation_name)
       
       
      }
    } catch (error) {
      // Handle error
      console.error(error);
     
     
    }
    


  }

  

  


  const SubmitQuestion = async (formData) => {
    setisloading(true)
   
    try {
      const response = await axios.post(ApiServer + '/api/admin/question/',
        formData,
      );
      if (response) {
        setisloading(false)
        const data = response.data  
       
        let arr = [...chatWith];
        const lastItem = arr[arr.length];
        arr.splice(arr.length, 1);
        arr.push(data)
        setChatWith(arr)
       
        if (promptSelected == null)
        {
          
           var obj={"id":data.conversation,"conversation_name":data.question}
          setPromptSelected(data.conversation)
          setEditPromptSelected(true)
          setEditPromptText(data.question)
          const updatedConversation = [obj, ...(conversation || [])];

// Update the state with the new array
        setconversation(updatedConversation);

        }


      

      } 
    }


    // ... do something with the response data
    catch (error) {
      setisloading(false)

      console.error(error);

      
      
     
    }
  };

  function formatToISO(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000+00:00`;
  }


 

  

  useEffect(() => {
    // setChatWith([]);

    if (!subscribed) {
      setChatWith([]);
      
      setTextt(`${count}/${NumberofUnsubcriber} messages restants`);
      setCheck(NumberofUnsubcriber);
    } else {
     // setChatWith([]);
    
      setCheck(NumberofSubcriber);
      setTextt(`${count}/${NumberofSubcriber} messages restants`);
    }
  }, [subscribed]);

  

  const submitHandler = (e) => {
    e.preventDefault();
    if (newMessage.current.value === "") {
      return alert("Please enter message to submit");
    } else {
    
      setnewChat(false)
        let arr = [...chatWith];
        var bodyFormData = new FormData();
        bodyFormData.append("question", newMessage.current.value);
        bodyFormData.append("conversation_id",promptSelected);

        bodyFormData.append("user",username);    
          arr.push({
            created_at: Date.now(),
            question: newMessage?.current?.value,
          
          });
         
          setChatWith(arr); 
          SubmitQuestion(bodyFormData);

        
      }
    
    newMessage.current.value = "";


  };

  const onEnterSubmit = (e) => {
    if (newMessage.current.value === "") {
      return alert("Please enter message to submit");
    } else {
     submitHandler(e)

        }
      
    
   
  };

  const updatethubstatus = async (id, status) => {
    var formdata=new FormData();
    formdata.append("status",status)
    try {
      const response = await axios.put(ApiServer + '/api/admin/chat/'+id,formdata
      );
      if (response) {
       
       
       
      }
    } catch (error) {
      console.error(error);
      
     
    }
   
  };
  const handleThumbsUp = (id) => {
    
    if (!thumbsDown && !thumbsUp || thumbsDown && !thumbsUp) {
      setThumbsUp(true);
      setThumbsDown(false);
      setChatWith((prevChatWith) =>
        prevChatWith.map((message) =>
          message.id === id ? { ...message, status: 1 } : message
        )
      );
    
      updatethubstatus(id, 1);
    }

    else if (thumbsUp) {
      setThumbsUp(false);
      setChatWith((prevChatWith) =>
        prevChatWith.map((message) =>
          message.id === id ? { ...message, status: -1 } : message
        )
      );
     
      updatethubstatus(id, -1);

    }

    //setThumbsUp(!thumbsUp);
    //setThumbsDown(false);



  };
  const handleCloseProfile = (id) => {
    setShowUserProfile(false);

  };
  const handleCloseFront = (id) => {
    setSubsInfoModal(false);


  };

  const handleThumbsDown = (id) => {



    if (!thumbsDown && !thumbsUp || !thumbsDown && thumbsUp) {
      setThumbsDown(true);
      setThumbsUp(false);
      setChatWith((prevChatWith) =>
        prevChatWith.map((message) =>
          message.id === id ? { ...message, status: 0 } : message
        )
      );
     
      
  
      updatethubstatus(id, 0);
      // updatethubstatus(formData);
    }
    else if (thumbsDown) {
      setThumbsDown(false);
      setChatWith((prevChatWith) =>
        prevChatWith.map((message) =>
          message.id === id ? { ...message, status: -1 } : message
        )
      );
      
      updatethubstatus(id, -1);

    }

    //setThumbsUp(!thumbsUp);
    // setThumbsDown(false);

    // setChatWith((prevChatWith) =>
    //   prevChatWith.map((message) =>
    //     message.id === id ? { ...message, status: -1 } : message
    //   )
    // );
    // const formData = new FormData();
    // formData.append("messageid", id);
    // formData.append("status", 0);
    // updatethubstatus(formData);
  };
  const HandleClick = () => {

    setPromptSelected(null)
    setChatWith([])
    setnewChat(true)

   
  };

  useEffect(() => {
    const value = localStorage.getItem("access_token");

    if (value != null) {
      setSubscribed(true);
      setSubsInfoModal(false);
    }
  }, [subscribed]);

  // useEffect(() => {
  //   if (location?.pathname === "/chat") {
  //     setSubsInfoModal(false);
  //   }
  // }, [location?.pathname]);

  useEffect(() => {
    if (showAboutUs || showFaqs || showUserProfile) {
      setShowModal(false);
    }
  }, [showAboutUs, showFaqs, showUserProfile]);

  useEffect(() => {
    if (showModal) {
      setShowAboutUs(false);
      setShowFaqs(false);
      setShowUserProfile(false);
    }
  }, [showModal]);
  
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behaviour: "smooth" });
  };

useEffect(scrollToBottom, [chatWith]);


  const scrollToBottomPrompt = () => {
    promptRef?.current?.scrollIntoView({ behaviour: "smooth" });
  };
  useEffect(scrollToBottomPrompt, [prompts]);

  // const onSelectPrompt = (item) => {

  //   //setPromptSelected(index);
  // };

  const onDeleteSelectedPrompt = async () => {
    const filteredPrompts = conversation.filter(
      (item, index) => item.id !== promptSelected
    );
    //setPrompts(filteredPrompts);
    setconversation(filteredPrompts)
   
    try {
      const response = await axios.delete(ApiServer + '/api/admin/conversation/'+promptSelected
      
      );
      if (response) {
       
        setChatWith(null)
       
      }
    } catch (error) {
      console.error(error);
     
     
    }
  };

  const onEditSelectedPrompt = () => {
    setEditPromptSelected(!editPromptSelected);
  };

  const onEditPrompt = async () => {
    const clone = [...conversation];
   
  // Assuming conversation is your original array



const updatedConversation = clone.map(item => {
    if (item.id === promptSelected) {
        return {
            ...item,
            conversation_name: editPromptText
        };
    }
    return item;
});

  setconversation(updatedConversation);
    // setEditPromptSelected(!editPromptSelected);
    var formdata=new FormData()
    formdata.append("conversation_name",editPromptText)
    try {
      const response = await axios.put(ApiServer + '/api/admin/conversation/'+promptSelected
      ,formdata
      
      );
      if (response) {
       
       
      }
    } catch (error) {
      console.error(error);
      
     
    }
  
  };
  return (
    <div className="flex flex-col ">
      {!subscribed && PromtLimitmodal && (
        <SubscriptionModal
          type={1}
          onClick={() => setPromtLimitmodal(!PromtLimitmodal)}
        />
       

      )}
      <Navbar
        onOpenModal={() => setShowModal(!showModal)}
        onOpenAbout={() => setShowAboutUs(!showAboutUs)}
        // onOpenUserProfile={() => setShowUserProfile(!showUserProfile)}
        text={textt}
      />
   <div className="bg-wheat">
    <Carousel/>
   </div>
    
    
     
       
      </div>
    
  );
};
