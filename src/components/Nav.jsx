import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <nav className="flex justify-center gap-6 py-8 bg-accent">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      {!user && <NavLink to="/login">Login</NavLink>}
      {user && (
        <button
          onClick={() => {
            signOutUser();
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Nav;
