import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let userData = {};
  const [token, setToken] = useState(Cookies.get("session-token") || null);
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  /**
   * If the user has a session token get the user's data.
   */

  useEffect(() => {
    if (token) {
      const fetchUser = async () => {
        try {
          const res = await fetch("http://localhost:3000/user/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const data = await res.json();
          setUser({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
          });
        } catch (error) {
          console.error("Something went wrong:", error);
        }
      };

      fetchUser();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
