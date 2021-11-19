import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { atom, selector, useRecoilValue } from "recoil";
import { io, Socket } from "socket.io-client";

// const testAtom = atom({
//   key: "test",
//   default: io("localhost:3001", { transports: ["websocket"] }),
// });

const testa = selector({
  key: "socket",
  get: async () => {
    const sockets: Socket = await new Promise((resolve, reject) => {
      const socket = io("localhost:3001");
      setTimeout(() => {
        resolve(socket);
      }, 100);
    });

    return sockets;
  },
});

function App() {
  const socket: Socket = useRecoilValue(testa);

  socket.on("log", (data) => {
    console.log("data:", data);
  });

  useEffect(() => {
    console.log("socketid:", socket);
  }, [socket]);

  const onClick = () => {
    try {
      socket.emit("log", { data: "data" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={onClick}>test!</button>
        </header>
      </div>
    </>
  );
}

export default App;
