import { Nav } from "@/components/Nav";
import "./styles.css";

export const metadata = {
  title: "SignUp #1 | AsmrProg",
};

export default function SignUp() {
  return (
    <main>
      <div className="circle"></div>
      <div className="card">
        <div className="logo">
          <i className="bx bx-bitcoin"></i>
        </div>
        <h2>Create Account</h2>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">SIGN UP</button>
        </form>
        <footer>
          Existing users, sign in <a href="#">Here</a>
        </footer>
      </div>

      <Nav />
    </main>
  );
}
