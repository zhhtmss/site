import { Link } from "react-router-dom";
import { Download, Github } from "lucide-react";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="ambient" aria-hidden="true" />
      <div className="container py-4 py-lg-5">
        <div className="hero-layout">
          <div className="hero-copy reveal reveal-left">
            <div className="brand-chip reveal reveal-scale delay-1">
              <Logo size={90} />
            </div>
            <h1 className="reveal reveal-left delay-2">SanGlow</h1>
            <p className="lead reveal reveal-left delay-3">{t("tag")}</p>
            <div className="d-flex flex-wrap gap-3 hero-actions reveal reveal-left delay-4">
              <Link className="btn btn-primary btn-lg" to="/download">
                <Download size={16} />
                {t("dl")}
              </Link>
              <a
                className="btn btn-outline-light btn-lg"
                href={GH}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
            <p className="plat mb-1 reveal reveal-left delay-5">Windows · macOS · Linux</p>
            <p className="muted mb-0 reveal reveal-left delay-6">{t("plat")}</p>
          </div>

          <div className="col-lg-6">
            <div className="phone-stage reveal reveal-right delay-2" aria-hidden="true">
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
                  <div className="phone-cover">
                    <Logo size={58} />
                  </div>
                  <strong>Neon memories</strong>
                  <small>SanGlow collection</small>
                  <i className="phone-progress" />
                  <div className="phone-controls">
                    <span>1:42</span>
                    <b>II</b>
                    <span>3:28</span>
                  </div>
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