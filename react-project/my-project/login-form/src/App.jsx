import { useState } from 'react'
import './App.css'

  
function App(){/*-------------------------Both does same thing-----{ChatInput()} or <ChatInput></ChatInput>--------*/
    const [showPassword, setShowPassword] = useState(true)

function showHide(){
    if(showPassword){
        setShowPassword(false);
    }
    else{
        setShowPassword(true);
    }
}
    return(
        <>
           <h2>Hello, welcome to my website</h2>
            
            <input className="inputs" placeholder="Email"/><br/>
            <input className="inputs"placeholder="Password" type={showPassword ? "text":"password"}/>
            <button onClick={showHide}>{showPassword ? "Hide":"Show"}</button><br/>
            <button className="send-buttons">Login</button>
            <button className="send-buttons">Sign up</button>
        
        </>
        );
}

export default App
