import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; 

const UserRegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleSignUp = async () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('secret', password);
        formData.append('email', email);
        if (avatar) {
            formData.append('avatar', avatar);
        }

        try {
            await axios.post('https://api.chatengine.io/users/', formData, {
                headers: {
                    'PRIVATE-KEY': '036156b5-8238-49b8-afa2-ea937183e37c', 
                    'Content-Type': 'multipart/form-data',
                },
            });
            setError('');
            console.log('User signed up successfully');
        } catch (error) {
            console.error('Error creating user account:', error);
            setError('Error creating user account.');
        }
    };

    const handleAvatarChange = (event) => {
        setAvatar(event.target.files[0]);
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Create New Account</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="Password"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="Email"
                    required
                />
                <div className="avatar-input">
                    <label htmlFor="avatar">Choose Avatar:</label>
                    <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                </div>
                <div align="center">
                    <button onClick={handleSignUp} className="button">
                        <span>Create Account</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
};

export default UserRegistrationForm;
