import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { useAppDuspatch } from "../hook/redux-hooks";
import { setUser } from "../store/slice/userSlice";

const SignApp = ({}) => {
  const dispatch = useAppDuspatch();
  const navigateHook = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, token: user.refreshToken, id: user.uid })
        );
        navigateHook("/");
      })
      .catch(() =>
        alert(
          "Error: either you entered the data incorrectly, or a user with such data is already registered"
        )
      );
  };

  return <Form title="Register" handleClick={handleRegister} />;
};
export default SignApp;
