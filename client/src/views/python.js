import axios from "axios";
import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import MessageForm from "../components/messageForm";
import MessageDisplay from "./messageDisplay";

const Python = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [newPythonMessage, setNewPythonMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  const newMessageHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/chatrooms", newPythonMessage)
      .then((res) => {
        console.log(res);

        setMessageList([...messageList, res.data]);

        setNewPythonMessage({
          addMessage: "",
        });
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <h1>Python Chatroom</h1>
      <h1>Hi - NAME</h1>
      <div>
        <MessageDisplay
        display={messageList}
        setDisplay={setMessageList}
        />
      </div>
      <div>
        <MessageForm
          chatMessage={newPythonMessage}
          setChatMessage={setNewPythonMessage}
          errors={errors}
          onSubmitHandler={newMessageHandler}
        />
      </div>
    </div>
  );
};

export default Python;
