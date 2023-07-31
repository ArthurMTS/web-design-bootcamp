import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <main className={styles.main}>
      <div></div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div>
              <h6 className={styles.footerTitle}>Microsoft Store</h6>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    About
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={styles.footerTitle}>Microsoft Store</h6>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    About
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={styles.footerTitle}>Microsoft Store</h6>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    About
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={styles.footerTitle}>Microsoft Store</h6>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    About
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.footerDivider} />

          <div className={styles.footerBottom}>
            <span className="copyright">
              &copy; 2022 AsmrProg. All rights reserved.
            </span>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerListLink}>
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerListLink}>
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerListLink}>
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Nav />
    </main>
  );
}
