import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("localhost:3001", { transports: ["websocket"] });
let history = [];

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");

  const clickRoom1 = () => {
    socket.emit("room", 1);
  };

  const clickRoom2 = () => {
    socket.emit("room", 2);
  };

  const clickRoom3 = () => {
    socket.emit("room", 3);
  };

  const inputMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendChat = () => {
    socket.emit("chat", message);
  };

  useEffect(() => {
    socket.on("chat", (chatList) => {
      setChatHistory([...history, chatList]);
    });

    socket.on("room", () => {
      setChatHistory([]);
    });
  }, []);

  useEffect(() => {
    history = chatHistory;
  }, [chatHistory]);

  return (
    <div className="App">
      <section className="buttons">
        <input
          type="text"
          className="nickname"
          size={30}
          value={socket.id || ""}
          readOnly
        />
        <button className="room" onClick={clickRoom1}>
          방 1
        </button>
        <button className="room" onClick={clickRoom2}>
          방 2
        </button>
        <button className="room" onClick={clickRoom3}>
          방 3
        </button>
      </section>
      <section className="chat-area">
        <div className="chat">
          {chatHistory.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div>
          <input type="text" className="chat-text" onInput={inputMessage} />
          <button className="chat-send" onClick={sendChat}>
            보내기
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
