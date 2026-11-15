import { Copy, Download, Monitor, Package, Terminal } from "lucide-react";
import { useApp } from "../ctx";
import { DOWNLOADS, GH } from "../data/i18n";
import { useEffect, useRef } from "react";

const cmd = `git clone ${GH}.git && cd sanglow && pip install -r requirements.txt && python main.py`;
const icons = [Monitor, Package, Terminal];

export default function DownloadSection() {
  const { t, toast } = useApp();
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

  const downloadFile = (file: string) => {
    const link = document.createElement("a");
    link.href = `/downloads/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
    toast(t("fileToast"));
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      /* clipboard unavailable */
    }
    toast(t("copied"));
  };

  return (
    <section id="download" className="section-shell" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal reveal-fade">{t("dH")}</h2>
        <div className="download-grid mb-4 reveal reveal-up delay-1">
          {DOWNLOADS.map(({ name, file }, index) => {
            const Icon = icons[index];
            return (
              <div key={name} className="download-item reveal reveal-scale" style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
                <div className="download-card h-100">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="download-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="fw-semibold">{name}</div>
                      <small className="text-body-secondary">{file}</small>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary w-100"
                    href={`/downloads/${file}`}
                    download
                    onClick={(event) => {
                      event.preventDefault();
                      downloadFile(file);
                    }}
                  >
                    <Download size={14} />
                    {t("dBtn")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3 reveal reveal-fade delay-2">
          <span className="badge-soft">{t("oss")}</span>
          <span className="badge-soft">MIT License</span>
        </div>

        <p className="muted text-center mb-3 reveal reveal-fade delay-3">{t("install")}</p>
        <div className="command-box reveal reveal-up delay-4">
          <code>{cmd}</code>
          <button
            type="button"
            className="icon"
            onClick={copy}
            aria-label={t("copy")}
          >
            <Copy size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}