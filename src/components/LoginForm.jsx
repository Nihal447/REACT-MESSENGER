import { useState } from "react";
import axios from 'axios';

const LoginForm = ({ onLogin, onSignUp }) => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "71ff1e52-fcdb-4562-be85-ddcb76ff8014",
            'User-Name': username,
            'User-Secret': password
        };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            onLogin();

        } catch (error) {
            setError('OOPS, INCORRECT ENTRIES.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">REACT MESSENGER</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
                <div align="center">
                    {}
                    <button className="newusebutton" onClick={onSignUp}>Create New User</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
