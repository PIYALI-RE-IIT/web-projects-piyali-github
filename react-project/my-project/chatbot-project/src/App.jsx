import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import {ChatMessageSetUp} from './components/ChatMessageSetUp'
import {ChatMessagesContent} from './components/ChatMessagesContent'
import './App.css'
import './index.css'
import {Chatbot} from 'supersimpledev'        


function App(){/*-------------------------Both does same thing-----{ChatInput()} or <ChatInput></ChatInput>--------*///component 4 and FINAL comp

   const [chatMessages, setChatMessages] = useState([   ]);
   
     
    return(
        <div className="app-container">              
            <ChatMessagesContent 

            chatMessages = {chatMessages}
            />
            <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}            
            />
                    
        </div>

    );
}

export default App
