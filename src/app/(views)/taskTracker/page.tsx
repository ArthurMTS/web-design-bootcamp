import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function TaskTracker() {
  return (
    <main className={styles.main}>
      <h2>Task Tracker</h2>
      <div className={styles.container}>
        <div className={styles.boxColumn}>
          <div className={styles.boxHeader}>
            <h5>
              Backlog <span className={styles.num}>8</span>
            </h5>
            <li>
              <i className="bx bx-plus"></i>
            </li>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.red}>
              Youtube
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.green}>
              Dev
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.yellow}>
              Design
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>
        </div>
        <div className={styles.boxColumn}>
          <div className={styles.boxHeader}>
            <h5>
              Ready <span className={styles.num}>9</span>
            </h5>
            <li>
              <i className="bx bx-plus"></i>
            </li>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.red}>
              Youtube
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.green}>
              Dev
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.yellow}>
              Design
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>
        </div>
        <div className={styles.boxColumn}>
          <div className={styles.boxHeader}>
            <h5>
              Doing <span className={styles.num}>4</span>
            </h5>
            <li>
              <i className="bx bx-plus"></i>
            </li>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.red}>
              Youtube
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.green}>
              Dev
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.yellow}>
              Design
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>
        </div>
        <div className={styles.boxColumn}>
          <div className={styles.boxHeader}>
            <h5>
              Review <span className={styles.num}>2</span>
            </h5>
            <li>
              <i className="bx bx-plus"></i>
            </li>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.red}>
              Youtube
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.green}>
              Dev
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>

          <div className={styles.box}>
            <span className={styles.tag} id={styles.yellow}>
              Design
            </span>
            <p>
              This is the title of the card for the thing that needs to be done.
            </p>
            <div className={styles.boxFooter}>
              <div className={styles.date}>
                <li>
                  <i className="bx bxs-calendar"></i>
                </li>
                <span>8 May</span>
              </div>

              <li className={styles.comment}>
                <i className="bx bxs-message"></i>14
              </li>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </main>
  );
}
