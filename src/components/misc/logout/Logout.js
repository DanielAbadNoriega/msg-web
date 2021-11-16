import { useState } from "react";
import { useHistory } from "react-router";
import userService from "../../../services/users-service";

function Logout() {
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const handleLogout = () => {
    userService
      .logout()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        const { errors, message } = error.response?.data || error;
        setErrors({
          message: message ? undefined : message,
          error: errors ? undefined : error,
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
