/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001");
import { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket])

  return (
    <div>
      <input type="text" onChange={(event) => {
        setMessage(event.target.value)
      }} placeholder='Message' />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  )
}

export default App
