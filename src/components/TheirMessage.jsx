import React, { useState } from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="message-row">
      {message.attachments && message.attachments.length > 0 ? (
        <div>
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px", cursor: "pointer" }}
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
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
