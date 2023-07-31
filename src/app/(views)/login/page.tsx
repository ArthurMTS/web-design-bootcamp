import { Nav } from "@/components/Nav";

import styles from "./styles.module.css";

export const metadata = {
  title: "Login #2 | AsmrProg",
};

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.loginCard}>
        <h2>Login</h2>  
        <h3>Enter your credentials</h3>

        <form className={styles.loginForm}>
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