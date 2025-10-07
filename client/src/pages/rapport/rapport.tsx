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

        <section>
          <div className="max-w-3/4 mx-auto">
            <h2>Have a consistent diet? </h2>
            <p>
              Rapport here what you normally eat every day and it will
              automatically be added to the daily rapport.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
