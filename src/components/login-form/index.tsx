import { useState } from "react";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    remember_me: false,
    sitename: "",
  });

  const onLogin = () => {
    console.log(formState);
  };

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    const controlValue = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: controlValue });
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
        {/* <label htmlFor="email">
          Remember me
          <input
            type="checkbox"
            name="remember_me"
            onChange={onChangeHandler}
          />
        </label> */}
        {/* <label htmlFor="email">
          Sitename edureka.co
          <input
            type="radio"
            onChange={onChangeHandler}
            name="sitename"
            value="edureka.co"
          />
          edureka.in
          <input
            type="radio"
            onChange={onChangeHandler}
            name="sitename"
            value="edureka.in"
          />
          <select onChange={onChangeHandler} name="sitename">
            <option value="edureka.co">edureka.co</option>
            <option value="edureka.in">edureka.in</option>
          </select>
        </label> */}
      </p>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
