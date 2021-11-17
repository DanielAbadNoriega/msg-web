import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import userService from "../../../services/users-service";

function Logout() {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const [errors, setErrors] = useState(null);

  const handleLogout = () => {
    userService
      .logout()
      .then(() => {
        auth.logout();
        history.push("/login");
      })
      .catch((error) => {
        const { errors, message } = error.response?.data || error;
        setErrors({
          message: message,
          error: error,
          ...errors,
        });
      });
  };
  
  return (
    <>
      <button className="btn btn-danger btn-sm mt-2" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}

export default Logout;
