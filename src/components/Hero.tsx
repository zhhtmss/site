import { Link } from "react-router-dom";
import { Download, Github } from "lucide-react";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
import Logo from "./Logo";
export default function Hero() {
  const { t } = useApp();
  return (
    <section className="hero">
      <div className="container py-4 py-lg-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="hero-copy">
              <div className="d-inline-flex align-items-center gap-3 mb-2 brand-chip">
                <Logo size={58} />
              </div>
              <h1>SanGlow</h1>
              <p className="lead">{t("tag")}</p>
              <div className="d-flex flex-wrap gap-3 hero-actions">
                <Link className="btn btn-primary btn-lg" to="/download">
                  <Download size={16} />
                  {t("dl")}
                </Link>
                <a className="btn btn-outline-light btn-lg" href={GH} target="_blank" rel="noreferrer">
                  <Github size={16} />
                  GitHub
                </a>
              </div>
              <p className="plat mb-1">Windows · macOS · Linux</p>
              <p className="muted mb-0">{t("plat")}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="phone-stage" aria-hidden="true">
              <div className="phone-glow" />
              <div className="phone phone-back">
                <div className="phone-camera" />
                <div className="phone-screen phone-playlist">
                  <span>PLAYLIST</span>
                  <strong>Night drive</strong>
                  <i className="mini-wave" />
                  <i className="mini-wave short" />
                </div>
              </div>
              <div className="phone phone-main">
                <div className="phone-camera" />
                <div className="phone-screen phone-player">
                  <span className="phone-label">SANGLOW PLAYER</span>
                  <div className="phone-cover"><Logo size={58} /></div>
                  <strong>Neon memories</strong>
                  <small>SanGlow collection</small>
                  <i className="phone-progress" />
                  <div className="phone-controls"><span>1:42</span><b>II</b><span>3:28</span></div>
                </div>
              </div>
              <div className="phone phone-front">
                <div className="phone-camera" />
                <div className="phone-screen phone-queue">
                  <span>QUEUE</span>
                  <b>01&nbsp; Neon memories</b>
                  <b>02&nbsp; Night drive</b>
                  <b>03&nbsp; Afterglow</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
