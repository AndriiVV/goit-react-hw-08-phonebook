import { useState } from "react";
import s from "./AuthForm.module.css";

const AuthForm = ({ cbOnSubmit }) => {
  const [form, setForm] = useState({
    name: "Bill Gates",
    email: "bill.gates@microsoft.com",
    password: "qwerty123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // console.log("form is: ", form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    console.log("handleSubmit is running... userData is: ", userData);
    cbOnSubmit(userData);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Username </span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={form.name}
          placeholder="Input username"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={form.email}
          placeholder="Input email"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={form.password}
          placeholder="Input password"
          onChange={handleChange}
        />
      </label>
      <button className={s.submit} type="submit">
        Register
      </button>
      {/* {isLoading && <h3>Loading...</h3>} */}
    </form>
  );
};

export default AuthForm;