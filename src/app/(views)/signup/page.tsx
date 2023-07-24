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
          <img src="/icons/bitcoin.svg" alt="Bitcoin icon" />
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
    </main>
  );
}
