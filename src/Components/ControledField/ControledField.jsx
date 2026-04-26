import React, { useState } from "react";

const ControledField = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, SetError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      SetError("Password musr be 6 charecter or lo9nger");
    } else {
      SetError("");
    }
  };

  const handlenameOnChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordOnchange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="Name"
          onChange={handlenameOnChange}
          defaultValue={name}
        />
        <br />
        <input
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          id=""
          defaultValue={email}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          defaultValue={password}
          placeholder="password"
          onChange={handlePasswordOnchange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControledField;
