import axios from "axios";
import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import MessageForm from "../components/messageForm";
import MessageDisplay from "./messageDisplay";

const Algos = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [newAlgosMessage, setNewAlgosMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  const newMessageHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/chatrooms", newAlgosMessage)
      .then((res) => {
        console.log(res);

        setMessageList([...messageList, res.data]);

        setNewAlgosMessage({
          addMessage: "",
        });
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <div className="main-container">
      </div>
      <h1>Algos Chatroom</h1>
      <h1>Hi - NAME</h1>
      <div>
        <MessageDisplay
        display={messageList}
        setDisplay={setMessageList}
        />
      </div>
      <div>
        <MessageForm
          chatMessage={newAlgosMessage}
          setChatMessage={setNewAlgosMessage}
          errors={errors}
          onSubmitHandler={newMessageHandler}
        />
      </div>
    </div>
  );
};

export default Algos;
