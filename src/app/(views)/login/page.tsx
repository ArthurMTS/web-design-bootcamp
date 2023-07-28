import { Nav } from "@/components/Nav";
import "./styles.css";

export const metadata = {
  title: "Login #2 | AsmrProg",
};

export default function Login() {
  return (
    <main>
      <div className="login-card">
        <h2>Login</h2>  
        <h3>Enter your credentials</h3>

        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="submit">LOGIN</button>
        </form>
      </div>

      <Nav />     
    </main>
  );
}