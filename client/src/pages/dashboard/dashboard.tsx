import Sidebar from "../../layout/sidebar";
import { useAuth } from "../../hooks/auth-provider";

export default function Dashboard() {
  const auth = useAuth();
  const user = auth.user;

  console.log(user);

  return (
    <div className="flex wrap h-full">
      <Sidebar />
      <main className="w-5/6 ml-[240px]">
        <div className="max-w-3/4 mx-auto">
          <h1>
            Welcome, {user.firstName} {user.lastName}!
          </h1>
        </div>
        <section>
          <div className="max-w-3/4 mx-auto">
            <h2 className="">Today's rapport</h2>
            <div className="flex justify-between">
              <div className="w-[200px] h-[150px] shadow-xl p-5 bg-white border-b-2 border-[#D52941]">
                <h3>Calorie intake</h3>
                <p className="text-lg">N/A</p>
              </div>
              <div className="w-[200px] h-[150px] shadow-xl p-5 bg-white  border-b-2 border-[#D52941]">
                <h3>Calorie loss</h3>
                <p className="text-lg">N/A</p>
              </div>
              <div className="w-[200px] h-[150px] shadow-xl p-5 bg-white  border-b-2 border-[#D52941]">
                <h3>BMI estimate</h3>
                <p className="text-lg">N/A</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-3/4 mx-auto">
            <h2>Weekly summary</h2>
            <p>WIP</p>
          </div>
        </section>
      </main>
    </div>
  );
}
