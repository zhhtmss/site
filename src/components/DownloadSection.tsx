import { Copy, Download, Monitor, Package, Terminal } from "lucide-react";
import { useApp } from "../ctx";
import { DOWNLOADS, GH } from "../data/i18n";
const cmd = `git clone ${GH}.git && cd sanglow && pip install -r requirements.txt && python main.py`;
const icons = [Monitor, Package, Terminal];
export default function DownloadSection() {
  const { t, toast } = useApp();
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
    <section id="download" className="section-shell">
      <div className="container">
        <h2 className="section-title">{t("dH")}</h2>
        <div className="download-grid mb-4">
          {DOWNLOADS.map(({ name, file }, index) => {
            const Icon = icons[index];
            return (
              <div key={name} className="download-item">
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

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
          <span className="badge-soft">{t("oss")}</span>
          <span className="badge-soft">MIT License</span>
        </div>

        <p className="muted text-center mb-3">{t("install")}</p>
        <div className="command-box">
          <code>{cmd}</code>
          <button type="button" className="icon" onClick={copy} aria-label={t("copy")}>
            <Copy size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
