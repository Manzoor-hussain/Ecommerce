import React from 'react';

export const WhatsAppButton = () => {
  const adminPhoneNumber = '03036445075'; // Replace with your admin's WhatsApp number
  const message = 'Hello, I have a question about the application.';

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', // Adjust as needed
        right: '20px', // Adjust as needed
        zIndex: 1000, // Adjust as needed
      }}
    >
      <button onClick={handleWhatsAppClick} style={{ padding: '10px' }}>
        Chat with Admin on WhatsApp
      </button>
    </div>
  );
};


