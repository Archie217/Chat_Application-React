import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "e0f2cbc3-7852-46b3-83c8-a21713416d45"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    )
}

export default App;