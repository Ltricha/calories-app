import { Link } from "react-router";
import Sidebar from "../../layout/sidebar";

export default function Rapport() {
  return (
    <div className="flex wrap h-full">
      <Sidebar />
      <main className="w-5/6 ml-[240px]">
        <div className="max-w-3/4 mx-auto">
          <h1>Rapport</h1>
          <Link to="/rapport/create-rapport">
            <button className="default-btn">Make a new rapport</button>
          </Link>
          <section></section>
        </div>
      </main>
    </div>
  );
}
