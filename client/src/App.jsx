import './App.css'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001");
import { useEffect } from 'react';

function App() {

  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello from client" });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket])

  return (
    <div>
      <input type="text" placeholder='Message' />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
