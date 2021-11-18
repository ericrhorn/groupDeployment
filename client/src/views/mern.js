import axios from "axios";
import React, { useState } from "react";
import MessageForm from "../components/messageForm";
import MessageDisplay from "./messageDisplay";

const Mern = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [newMernMessage, setNewMernMessage] = useState({
    addMessage: "",
  });

  const [err, setErr] = useState({});

  const newMessageHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/message", newMernMessage)
      .then((res) => {
        console.log(res);
        
        setMessageList([...messageList, res.data]);

        setNewMernMessage({
          addMessage: "",
        });

      })
      .catch((err) => {
        setErr(err.response.data.errors);
      });
  };
  return (
    <div className="message-form">
      <div>
        <h1>Mern Chatroom</h1>
        <h1>Hello (logged in user)</h1>
        <div>
          <MessageDisplay 
          display={messageList} 
          setDisplay={setMessageList} 
          />
        </div>
        <div>
          <MessageForm
            chatMessage={newMernMessage}
            setChatMessage={setNewMernMessage}
            errors={err}
            onSubmitHandler={newMessageHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Mern;
