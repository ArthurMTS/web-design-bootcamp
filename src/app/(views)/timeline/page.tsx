import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function Timeline() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.timelineBox} id={styles.primary}>
            <div className={styles.icon}>
              <i className="bx bx-wink-smile"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Primary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>1 Hours Ago</p>
            </div>
          </div>

          <div className={styles.timelineBox} id={styles.success}>
            <div className={styles.icon}>
              <i className="bx bx-laugh"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Success</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>3 Hours Ago</p>
            </div>
          </div>

          <div className={styles.timelineBox} id={styles.danger}>
            <div className={styles.icon}>
              <i className="bx bx-happy-heart-eyes"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Danger</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>8 Hours Ago</p>
            </div>
          </div>

          <div className={styles.timelineBox} id={styles.secondary}>
            <div className={styles.icon}>
              <i className="bx bx-sleepy"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Secondary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>8 Hours Ago</p>
            </div>
          </div>

          <div className={styles.timelineBox} id={styles.warning}>
            <div className={styles.icon}>
              <i className="bx bx-dizzy"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Warning</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>1 Days Ago</p>
            </div>
          </div>

          <div className={styles.timelineBox} id={styles.info}>
            <div className={styles.icon}>
              <i className="bx bx-cool"></i>
            </div>
            <div className={styles.timelineBody}>
              <h4 className={styles.header}>
                <span className={styles.badge}>Info</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className={styles.time}>3 Days Ago</p>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </main>
  );
}
