import React, { useState } from 'react';
import { AnnouncementBar } from '../../Components/navbar/announcement';
import { Navigation } from '../../Components/navbar/myNavbar';
import { Social } from '../../Components/Cart/social';
import { FreeDlivery } from '../../Components/footer/foooterup';
import { Footer } from '../../Components/footer/footer';
import {WhatsAppButton} from "../../Components/Button/WhatsappButton"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    
<>

    <AnnouncementBar/>
<Navigation></Navigation>
<div className="w-full bg-[#F2ECFF] mb-14">

    <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
            <span className="font-medium">
                Contact
            </span>
           
        </div>
       
            <Social 
            height="6"
            width="6"
            />
      

    </div>
</div>
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-5 text-center">Contact Us</h2>
      {/* <WhatsAppButton/> */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>



    <div class="border-b border-gray-300 my-4"></div>

<FreeDlivery/>
<Footer/>
    </>
  );
};


export default ContactUs;
