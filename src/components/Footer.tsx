import { Link } from "react-router-dom";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="site-footer border-top mt-5">
      <div className="container py-4">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-md-4">
            <div className="fw-semibold fs-5 mb-1">SanGlow</div>
            <p className="muted mb-0">{t("fTag")}</p>
          </div>
          <nav className="col-md-auto d-flex flex-wrap gap-3 align-items-center justify-content-md-end">
            <a href={GH} target="_blank" rel="noreferrer" className="text-decoration-none">
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
          <div className="col-md-12 text-center text-md-end">
            <p className="muted mb-0">MIT License · © 2026 SanGlow</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
