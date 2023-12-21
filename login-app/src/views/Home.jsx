import MyButton from "../components/shared/MyButton";
import "../styles/home.css";

export default function Home({ setUser }) {
  return (
    <div className="home">
      <nav>
        <h1>Appster 2000</h1>
        <MyButton
          text="Sign out"
          type="light"
          onClick={() => setUser(undefined)}
          loading={false}
        />
      </nav>
      <h1>Welcome to Apster 2000</h1>
    </div>
  );
}
