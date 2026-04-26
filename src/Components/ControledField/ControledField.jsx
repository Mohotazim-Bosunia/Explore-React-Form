import React, { useState } from "react";

const ControledField = () => {
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordOnchange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      SetError("Password musr be 6 charecter or lo9nger");
    } else {
      SetError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
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
