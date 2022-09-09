import './Chat.css'
import SearchOutlined from  '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import axios from './axios'

import {Avatar, Button} from '@material-ui/core';
import React, { useState } from 'react';

function Chat({ messages }) {

  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault();


  await axios.post('/messages/new', {
    
      "message": input,
          "name": "kenny_white",
          "timestamp": "just now",
          "received":"false"
  })

  setInput('');
};

  return (
    <div className="chat">
      <div className="chat_header">
         <Avatar src="" />

         <div className='chat_headerinfo'>
          <h3>Room Name</h3>
          <p>Last Seen at ...</p>
         </div>

         <div className='chat_headerright'>
         <Button className="">
           <SearchOutlined />
          </Button>

          <Button className="">
            <AttachFile/>
          </Button>

          <Button className="">
            <MoreVertIcon />
          </Button>


         </div>
        </div>

        <div className='chat_body'>
        {messages.map(message => (
          <p className={`chat_message ${message.received && "chat_reciever"}`}>
            <span className='chat_name'>{message.name} </span>
            {message.message}

            <span className='chat_timestamp'>
            {new Date().toUTCString()}

              
               </span>
          </p>
        ))}
         

        {/* <p className='chat_message chat_reciever'>
            <span className='chat_name'>Kenny </span>

            <span className='chat_timestamp'>
              {new Date().toUTCString()}
              
               </span>
          </p>

          <p className='chat_message'>
            <span className='chat_name'>
             </span>

            <span className='chat_timestamp'>
              {new Date().toUTCString()}
              
               </span>
          </p>

        *  <p className='chat_message chat_reciever'>
            <span className='chat_name'> </span>

            <span className='chat_timestamp'>
              {new Date().toUTCString()}
              
               </span>
          </p> */}

        </div>

        <div className='chat_footer'>
            < InsertEmoticon />
            <form> 
               <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text'/>
               <button onClick={sendMessage}
                type='submit' > Send a Message</button>
            </form>
            <KeyboardVoiceIcon/>
        </div>
       
    </div>
  );
}

export default Chat;