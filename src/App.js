import './App.css';
import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'
import {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() =>{
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })

    
  },[])

  useEffect(() => {
    const pusher = new Pusher('aab86e5864dda195f6db', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    
    });

    //ths s not to allow mutiple chat or multiple 

  },[messages])

   
  

  console.log(messages)

  return (
    <div className="app">
      <div className='app_body'>
        
          <Sidebar />
          <Chat messages={messages} />
    
      </div>

    
    </div>
  );
}

export default App;
