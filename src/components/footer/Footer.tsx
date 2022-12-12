import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="screen-max flex">
          <div className="footer-inner">
            {/* Footer list */}
            <div className="footer-list">
              <div className="footer-list-item hover-target">Home</div>
              <div className="footer-list-item hover-target">About Me</div>
              <div className="footer-list-item hover-target">Skills</div>
              <div className="footer-list-item hover-target">Portfolio</div>
            </div>

            {/* Socials */}
            <div className="footer-socials flex-c">
              <div>
                <i className="fa-brands fa-2xl fa-github hover-target"></i>
              </div>
              <div>
                <i className="fa-brands fa-2xl fa-linkedin hover-target"></i>
              </div>
              <div>
                <i className="fa-brands fa-2xl fa-youtube hover-target"></i>
              </div>
              <div>
                <i className="fa-brands fa-2xl fa-twitter hover-target"></i>
              </div>
            </div>

            {/* Branding */}
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo_transparent.svg"}
                  alt="logo"
                />
              </div>
              <div className="footer-brand-text">
                2019 &copy; Gowthaman Ravindrathas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
