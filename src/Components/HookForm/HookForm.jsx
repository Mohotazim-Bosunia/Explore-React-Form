import React from "react";
import useInputField from "../../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          onChange={nameOnChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          defaultValue={email}
          onChange={emailOnChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <input
          defaultValue={password}
          onChange={passwordOnChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
