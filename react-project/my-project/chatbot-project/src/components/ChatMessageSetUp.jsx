import robot from '../assets/robot.png'
import user from '../assets/user.png'
import './ChatMessageSetUp.css'

export function ChatMessageSetUp({message,sender}){///use PascalCase letter format in function naming ///component 2
            
                ///if statement shortcuts below
            return (
                <div className={sender === 'user' ? 'chat-message-user':'chat-message-robot'}>
                    {sender === 'robot' && (
                        <img src={robot} className="chat-message-profile"/>
                    )}
                    <div className="chat-message-text">
                        {message}
                    </div>
                    {sender === 'user' && (
                        <img src={user} className="chat-message-profile"/>
                    )}                
                </div>

            );
        }