import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import { loginUser } from "../../redux/auth/authOperations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const cbOnSubmit = (userData) => dispatch(loginUser(userData));

  return (
    <>
      <h2>LoginPage</h2>
      <LoginForm cbOnSubmit={cbOnSubmit} />
    </>
  );
};

export default LoginPage;