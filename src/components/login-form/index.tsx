import { useState } from "react";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    remember_me: false,
    sitename: "",
  });

  const [isValid, setIsValid] = useState(null);

  const onLogin = () => {
    console.log(formState);
  };

  const validate = (formValue) => {
    const errors = {};

    if (formValue.email === "") {
      errors["email"] = "Email is required";
    }

    if (!formValue.email.includes("@")) {
      errors["email"] = "Email is not valid";
    }

    if (formValue.password === "") {
      errors["password"] = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setIsValid(errors);
    } else {
      setIsValid(null);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    const controlValue = type === "checkbox" ? checked : value;
    const formValue = { ...formState, [name]: controlValue };
    setFormState(formValue);
    validate(formValue);
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
          {isValid?.["email"] && <span className="text-red-600">{isValid?.["email"]}</span>}
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={onChangeHandler} />
          {isValid?.["password"] && <span className="text-red-600">{isValid?.["password"]}</span>}
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
      <button disabled={!!isValid}>Submit</button>
    </form>
  );
};

export default LoginForm;
