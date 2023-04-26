import Button from "./Button";
import "./styles.css";
import LoginButton from "./LoginButton";

export default function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Logging")}>
        Login
      </LoginButton>
    </div>
  );
}
