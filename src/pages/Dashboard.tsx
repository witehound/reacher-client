import { NewGoal } from "../components";

const Dashboard = ({ user }: any) => {
  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <NewGoal />
    </>
  );
};

export default Dashboard;
