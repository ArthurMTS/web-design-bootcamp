import { Nav } from "@/components/Nav";
import "./styles.css";

export default function Timeline() {
  return (
    <main>
      <div className="container">
        <div className="timeline">
          <div className="timeline-box" id="primary">
            <div className="icon">
              <i className="bx bx-wink-smile"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Primary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">1 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="success">
            <div className="icon">
              <i className="bx bx-laugh"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Success</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">3 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="danger">
            <div className="icon">
              <i className="bx bx-happy-heart-eyes"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Danger</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">8 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="secondary">
            <div className="icon">
              <i className="bx bx-sleepy"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Secondary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">8 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="warning">
            <div className="icon">
              <i className="bx bx-dizzy"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Warning</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">1 Days Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="info">
            <div className="icon">
              <i className="bx bx-cool"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Info</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                egestas aliquam nisi, in interdum magna. Fusce erat lectus,
                vehicula id neque non, luctus vehicula ex. Sed et rhoncus
                sapien, vitae pharetra elit. Praesent ultrices tincidunt purus a
                eleifend.
              </p>
              <p className="time">3 Days Ago</p>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </main>
  );
}
