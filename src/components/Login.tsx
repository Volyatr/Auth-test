import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { useAppDuspatch } from "../hook/redux-hooks";
import { setUser } from "../store/slice/userSlice";

const Login = ({}) => {
  const dispatch = useAppDuspatch();
  const navigateHook = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, token: user.refreshToken, id: user.uid })
        );
        navigateHook("/");
      })
      // добавить проверку на валидность вводимых данных
      .catch(() => alert("User not found, please login "));
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};
export default Login;
