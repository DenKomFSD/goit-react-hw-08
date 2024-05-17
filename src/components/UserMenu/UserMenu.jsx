import { useSelector } from "react-redux";
import css from "../UserMenu/UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={css.styles}>
        <p>Welcome, {user.name}</p>
        <button>Log out</button>
      </div>
    </>
  );
}
