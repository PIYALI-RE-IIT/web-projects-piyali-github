import { useEffect } from 'react'
import { useRef } from 'react'
import {ChatMessageSetUp} from './ChatMessageSetUp'
import './ChatMessagesContent.css'

export function ChatMessagesContent({chatMessages}){///component 3

    const chatMessagesRef = useRef(null);

    useEffect(() => {
       const containerElem = chatMessagesRef.current;
       if(containerElem){
        containerElem.scrollTop = containerElem.scrollHeight;
       }
    }, [chatMessages])

     return(
        <div className="chat-messages-container" ref={chatMessagesRef}>
            
            {chatMessages.map((chatMessageProp) => {
                return(
                    <ChatMessageSetUp 
                        message ={chatMessageProp.message}
                        sender = {chatMessageProp.sender} 
                        key = {chatMessageProp.id}           
                    />
                );
            })}
        </div>
        )
}
