import { Link } from "react-router-dom";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
export default function Footer() {
  const { t } = useApp();
  return (
    <footer>
      <div>
        <b>SanGlow</b>
        <p className="muted">{t("fTag")}</p>
      </div>
      <nav>
        <a href={GH} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <Link to="/download">{t("download")}</Link>
        <a href={GH + "/blob/main/LICENSE"} target="_blank" rel="noreferrer">
          {t("license")}
        </a>
      </nav>
      <p className="muted">MIT License · © 2026 SanGlow</p>
    </footer>
  );
}
