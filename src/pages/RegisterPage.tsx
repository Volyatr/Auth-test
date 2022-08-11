import { Link } from "react-router-dom";
import SignApp from "../components/SignApp";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignApp />
      <p>
        Alrady have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
export default RegisterPage;
