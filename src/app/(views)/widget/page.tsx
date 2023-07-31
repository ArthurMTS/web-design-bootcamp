import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function Widget() {
  return (
    <main className={styles.main}>
      <div className={styles.widget}>
        <div className={styles.tabs}>
          <input type="radio" name="group" id="tab-1" />
          <input type="radio" name="group" id="tab-2" />
          <input type="radio" name="group" id="tab-3" />

          <div className={styles.buttons}>
            <label htmlFor="tab-1" className="material-symbols-outlined">
              <i className="bx bx-home-alt"></i>
            </label>
            <label htmlFor="tab-2" className="material-symbols-outlined">
              <i className="bx bx-lock"></i>
            </label>
            <label htmlFor="tab-3" className="material-symbols-outlined">
              <i className="bx bx-cog"></i>
            </label>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.content}>
            <div className={styles.contentInner}>
              <div>
                <h2>Home</h2>
                <p>
                  Tab Widget Home Contents!
                </p>
              </div>
              <div>
                <h2>Accounts</h2>
                <p>
                  Tab Widget Accounts Contents!
                </p>
              </div>
              <div>
                <h2>Setting</h2>
                <p>
                  Tab Widget Setting Contents!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Nav />
    </main>
  );
}
