import { Link } from "react-router-dom";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
import { useEffect, useRef } from "react";

export default function Footer() {
  const { t } = useApp();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = footerRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="site-footer border-top mt-5" ref={footerRef}>
      <div className="container py-4">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-md-4 reveal reveal-left">
            <div className="fw-semibold fs-5 mb-1">SanGlow</div>
            <p className="muted mb-0">{t("fTag")}</p>
          </div>
          <nav className="col-md-auto d-flex flex-wrap gap-3 align-items-center justify-content-md-end reveal reveal-fade delay-1">
            <a
              href={GH}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              GitHub
            </a>
            <Link to="/download" className="text-decoration-none">
              {t("download")}
            </Link>
            <a
              href={GH + "/blob/main/LICENSE"}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              {t("license")}
            </a>
          </nav>
          <div className="col-md-12 text-center text-md-end reveal reveal-fade delay-2">
            <p className="muted mb-0">MIT License · © 2026 SanGlow</p>
          </div>
        </div>
      </div>
    </footer>
  );
}