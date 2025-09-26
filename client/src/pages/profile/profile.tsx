import Sidebar from "../../layout/sidebar";

export default function Profile() {
  return (
    <div>
      <Sidebar />
      <main className="w-5/6 ml-[240px]">
        <section>
          <div className="max-w-3/4 mx-auto">
            <h1>Profile</h1>
            <p>Welcome on the profile page.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
