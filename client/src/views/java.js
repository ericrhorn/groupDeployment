import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import MessageForm from "../components/messageForm";
import MessageDisplay from "./messageDisplay";

const Java = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [newJavaMessage, setNewJavaMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  const newMessageHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/message", newJavaMessage)
      .then((res) => {
        console.log(res);

        setMessageList([...messageList, res.data]);

        setNewJavaMessage({
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
      <h1>Java Chatroom</h1>
      <h1>Hi - NAME</h1>
      <div>
        <MessageDisplay
        display={messageList}
        setDisplay={setMessageList}
        />
      </div>
      <div>
        <MessageForm
          chatMessage={newJavaMessage}
          setChatMessage={setNewJavaMessage}
          errors={errors}
          onSubmitHandler={newMessageHandler}
        />
      </div>
    </div>
  );
};

export default Java;

