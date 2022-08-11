import { Navigate } from "react-router-dom";
import { useAppDuspatch } from "../hook/redux-hooks";
import { UseAuth } from "../hook/UseAuth";
import { removeUser } from "../store/slice/userSlice";
import ContactList from "../components/ContactList";

const HomePage = () => {
  const dispatch = useAppDuspatch();
  const { isAuth, email } = UseAuth();
  const navigate = <Navigate to="/login" />;

  return isAuth ? (
    <div>
      {/* добавить сюда список контактов  */}
      <h1>My contact list</h1>
      <ContactList />
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    navigate
  );
};
export { HomePage };
