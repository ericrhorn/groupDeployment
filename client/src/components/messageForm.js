import React from "react";

const MessageForm = (props) => {
  const { onSubmitHandler, chatMessage, setChatMessage, errors } = props;

  const onInputHandler = (e) => {
    let newStateObject = { ...chatMessage };
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setChatMessage(newStateObject);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>New Message</label>
      <br />
      <input
        type="text"
        onChange={onInputHandler}
        name="addMessage"
        value={chatMessage.addMessage}
        style={{ width: "500px", height: "75px" }}
      />
      {errors && errors.addMessage && <p>{errors.addMessage.message}</p>}
      <button type="submit">Submit Message</button>
    </form>
  );
};

export default MessageForm;
