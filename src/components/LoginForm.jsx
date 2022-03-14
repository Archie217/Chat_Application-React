import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {'Project-ID' : "e0f2cbc3-7852-46b3-83c8-a21713416d45", 'User-Name' : username, 'User-Secret' : password}

    try {
        // enter username | password --> chatengine --> get messages
        await axios.get('https://api.chatengine.io/chats', {headers : authObject});
        // works out --> logged in
        localStorage.setItem('username',username);  //we are setting the username and passwords
        localStorage.setItem('password',password);  // to the local storage so that we don't have to log in every time

        window.location.reload(); //and then reload the page
    } catch (error) {
        // if not --> send error : try with a new username
        setError('Oops! Incorrect Credentials.')
    }
}
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" value = {username} onChange = {(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type = "password" value = {password} onChange = {(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align = "center">
                        <button type = "submit" className = "button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;


