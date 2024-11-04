import React from "react";

export default function Footer() {
  return (
    <main id="main-body">
      <footer>
        <div className="footer-content">
          <div className="SocialMedia">
            <a
              href="https://www.linkedin.com/in/LaxmiNarayana31"
              target="_blank"
              rel="noreferrer">
              <div className="socialBox linkedin"></div>
            </a>
            <a
              href="https://twitter.com/Shiva_131"
              target="_blank"
              rel="noreferrer">
              <div className="socialBox twitter"></div>
            </a>
            <a
              href="https://github.com/LaxmiNarayana31"
              target="_blank"
              rel="noreferrer">
              <div className="socialBox github"></div>
            </a>
            <a
              href="https://www.threads.net/LaxmiNarayana31"
              target="_blank"
              rel="noreferrer">
              <div className="socialBox thread"></div>
            </a>
            <a
              href="https://www.instagram.com/laxminarayana_07/"
              target="_blank"
              rel="noreferrer">
              <div className="socialBox instagram"></div>
            </a>
          </div>
          <div className="footer-line">
            <p>&copy; {new Date().getFullYear()} LaxmiNarayana.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
