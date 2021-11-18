// import React, {useState, useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteMessage = (props) => {
  const { id, removeFromDom } = props;

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/message/${id}`)
      .then((res) => {
        if (removeFromDom) {
          removeFromDom(id);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default DeleteMessage;
