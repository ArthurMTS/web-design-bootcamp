import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export const metadata = {
  title: "SignUp #1 | AsmrProg",
};

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.circle}></div>
      <div className={styles.card}>
        <div className={styles.logo}>
          <i className="bx bx-bitcoin"></i>
        </div>
        <h2>Create Account</h2>
        <form className={styles.form}>
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
