import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      navigate("/login", { replace: true });
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  }

  return (
    <aside className="shadow-xl bg-[#D52941] w-1/6 h-screen py-10 px-5 text-white flex-none fixed top-0 left-0">
      <ul>
        <li>
          {" "}
          <Link className="py-8 block text-white text-3xl" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="py-8 block text-white text-3xl" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="py-8 block text-white text-3xl" to="/rapport">
            Rapport
          </Link>
        </li>
        <li>
          <Link className="py-8 block text-white text-3xl" to="/rapport">
            Analytics
          </Link>
        </li>
        <li>
          <Link className="py-8 block text-white text-3xl" to="/rapport">
            BMI
          </Link>
        </li>
        <li>
          <Link className="py-8 block text-white text-3xl" to="/rapport">
            Shop
          </Link>
        </li>
      </ul>
      <button className="default-btn" onClick={handleClick}>
        Logout
      </button>
    </aside>
  );
}
