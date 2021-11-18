import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import MessageForm from "./messageForm";

const EditMessage = (props) => {
  // const [display, setDisplay] = useState([]);
  const { _id } = props;
  const [updateMessage, setUpdateMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/message/${_id}`).then((res) => {
      setUpdateMessage(res.data);
    });
  }, [_id]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/message/${_id}`)
  //     .then((res) => {
  //       setDisplay(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [_id]);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/message/${_id}`, updateMessage)
      .then((res) => {
        console.log("success")
        navigate("/mern")
      })
      .catch((err) => {
        console.log("failed")
        setErrors(err.response.data.errors);
      });
  };

  return (
    // <form onSubmit={updateHandler}>
    //   <label>New Message</label>
    //   <br />
    //   <input
    //     type="text"
    //     onChange={updateHandler}
    //     name="addMessage"
    //     value={display.addMessage}
    //     style={{ width: "500px", height: "75px" }}
    //   />
    //   {errors && errors.addMessage && <p>{errors.addMessage.message}</p>}
    //   <button type="submit">Submit Message</button>
    // </form>
    <div>
      <h1>Edit</h1>
      <MessageForm
        chatMessage={updateMessage}
        setChatMessage={setUpdateMessage}
        errors={errors}
        onSubmitHandler={updateHandler}
      />
    </div>
  );
};

export default EditMessage;
