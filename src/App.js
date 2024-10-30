import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserRegistrationForm from './components/UserRegistrationForm';
import ChatFeed from './components/ChatFeed';
import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('username'));
    const [showRegistration, setShowRegistration] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleSignUp = () => {
        setShowRegistration(true);
    };

    return (
        <div>
            {!loggedIn && !showRegistration && <LoginForm onLogin={handleLogin} onSignUp={handleSignUp} />}
            {!loggedIn && showRegistration && <UserRegistrationForm />}
            {loggedIn && (
                
                <ChatEngine
                    height="100vh"
                    projectID="71ff1e52-fcdb-4562-be85-ddcb76ff8014"
                    userName={localStorage.getItem('username')}
                    userSecret={localStorage.getItem('password')}
                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                />
            )}
        </div>
    );
};

export default App;
