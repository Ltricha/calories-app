import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/auth-provider";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  /**
   *@author Latricha Seym
   *@param event
   * When the user clicks on submit
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Data from the sign in form.
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Post the data (credentials) to the server.
    try {
      const response: Response = await fetch(
        "http://localhost:3000/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const isValid = validateUser(response, data);

      if (isValid) {
        auth.setToken(Cookies.get("session-token"));
        navigate("/");
      }
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  }

  /**
   * Validates the user by checking if a valid response has been sent back to the server.
   * @param response
   */
  function validateUser(response: Response, data) {
    const errorList: string[] = [];
    if (response.status == 401) {
      errorList.push("Wrong email/password combination.");
    }

    if (errorList.length == 0 && response.status == 200) {
      return true;
    }
    setErrors(errorList);
  }

  return (
    <main>
      <div className="max-w-1/3 mx-auto py-10">
        <h1>Login</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full"
              type="text"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block " htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="block w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
              />
              <span
                className="absolute top-0 right-5"
                onClick={(event) => {
                  event.preventDefault();
                  setShowPassword((prev) => !prev);
                }}
              >
                Show
              </span>
            </div>
          </div>
          {errors.map((error) => (
            <p>{error}</p>
          ))}
          <p className="my-5">Forgot password?</p>
          <button className="default-btn" type="submit">
            Login
          </button>

          <div>
            <h2>Need an account?</h2>
            <p>Register here</p>
          </div>
        </form>
      </div>
    </main>
  );
}
