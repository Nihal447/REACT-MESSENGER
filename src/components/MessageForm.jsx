import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import EmojiPicker from "emoji-picker-react"; 

const MessageForm = (props) => {
    const [value, setValue] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });

        setValue("");
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: "" });
    };

    const handleEmojiSelect = (emoji) => {
        setValue(value + emoji.emoji); 
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button" style={{ fontSize: "24px" }}>
                    {}
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleUpload}
            />
            <span
                className="emoji-button"
                style={{ fontSize: "24px", cursor: "pointer" }}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
                😄 {}
            </span>
            {showEmojiPicker && (
                <EmojiPicker
                    onEmojiClick={handleEmojiSelect}
                    disableSearchBar
                    disableAutoFocus
                />
            )}
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
};

export default MessageForm;
