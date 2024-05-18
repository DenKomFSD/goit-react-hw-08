import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
