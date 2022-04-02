import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserEmail, getUsername } from "redux/auth/authSelectors";
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
  const username = useSelector(getUsername);
  const userEmail = useSelector(getUserEmail);
  
  return (
    <>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/contacts"
        style={btnStyle}
      >
        Phonebook
      </NavLink>
      <a href={`mailto:${userEmail}`} style={btnStyle}>Welcome, {username}</a>
      <button type="button" style={ {fontSize: "16px", borderRadius: "5px", padding: "10px", margin: "10px"}} onClick={() => dispatch(logOut())}>
          LogOut
      </button>
    </>
  );
};

export default UserNav;