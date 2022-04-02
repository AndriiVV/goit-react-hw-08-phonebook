import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/authSlice";

const btnStyle = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
  fontSize: "20px",
};

const UserNav = () => {

  const dispatch = useDispatch();
  
  return (
    <>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/contacts"
        style={btnStyle}
      >
        Phonebook
      </NavLink>
      <a style={btnStyle}>user@email.com</a>
      <button type="button" style={ {fontSize: "16px", borderRadius: "5px", padding: "10px", margin: "10px"}} onClick={() => dispatch(logOut())}>
          LogOut
      </button>
    </>
  );
};

export default UserNav;