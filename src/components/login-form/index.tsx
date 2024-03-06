import { useState } from "react";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const onLogin = () => {
    console.log(formState);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name] : value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <p>
        <label htmlFor="email">
          Email
          <input name="email" onChange={onChangeHandler} />
        </label>
        <label htmlFor="email">
          Password
          <input type="password" name="password" onChange={onChangeHandler} />
        </label>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
