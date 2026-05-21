import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import load from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){///component 1

            const [inputText, setInputText] = useState('');

            function saveInputText(event){
                setInputText(event.target.value);
            }

            async function sendMessage(){

                 setInputText('');

                const newChatMessages = [...chatMessages,
                    {
                        message: inputText,
                        sender: 'user',
                        id: crypto.randomUUID()
                    }];
                     setChatMessages([
                        ...newChatMessages,
                        // This creates a temporary Loading... message.
                        // Because we don't save this message in newChatMessages,
                        // it will be remove later, when we add the response.
                        {
                        message: <img className="loading-spinner" src={load}/>,
                        sender: 'robot',
                        id: crypto.randomUUID()
                        }
                    ]);
               
                    const response= await Chatbot.getResponseAsync(inputText);
                    setChatMessages([
                        ...newChatMessages,
                        {
                            message: response,
                            sender: 'robot',
                            id: crypto.randomUUID()
                        }
                    ]); 

       
            }

            function enterKey(event){
                if (event.key === 'Enter') {
                    sendMessage();
                }
            }
            
            return (
            <div className="chat-input-container">
              <input
                className="chat-input"
                placeholder="Send a message to Chatbot" 
                size="50"
                onChange = {saveInputText}
                value={inputText}
                onKeyDown={enterKey}
               />
            <button className="send-button" onClick={sendMessage}>Send</button>
                
            </div>

            );
        }