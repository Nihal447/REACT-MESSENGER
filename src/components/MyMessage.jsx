import React, { useState } from "react";

const MyMessage = ({ message }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (message?.attachments?.length > 0) {
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px' }}>
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          onClick={openLightbox}
        />
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-container">
              <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="zoomed-image"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'whinte', backgroundColor: '#dda0dd' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;