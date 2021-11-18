import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import DeleteMessage from "../components/deleteMessage";

const MessageDisplay = (props) => {
  const {display, setDisplay} = props;
  // const [messageList, setMessageList] = useState([]);
  const {_id} = props;
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/message")
      .then((res) => {
        console.log(res.data)
        setDisplay(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);



  const removeFromDom = (id) => {
    const newList = display.filter((message) => message._id !== id);
    setDisplay(newList);
  };



  return (
    // <h1>Display Message Here</h1>
    <div>
      {display.map((message, idx) => (
        <div className="display" key={idx}>
          <p>(user who made post) wrote:</p>
          
          <textarea rows="4" cols="50">
            {message.addMessage}
          </textarea>
          <br/>
          <div>
          <Link to={"/message/" + `${message._id}` + "/edit"}>
            <button type="button">Edit</button>
          </Link>
          <DeleteMessage id={message._id} removeFromDom={removeFromDom} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
