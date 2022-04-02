import { useDispatch } from "react-redux";
import AuthForm from "../AuthForm/AuthForm";
import { registerUser } from "../../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const cbOnSubmit = (userData) => dispatch(registerUser(userData));

  return (
    <>
      <h2>RegisterPage</h2>
      <AuthForm cbOnSubmit={cbOnSubmit} />
    </>
  );
};

export default RegisterPage;