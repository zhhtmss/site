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
    <section id="download">
      <h2>{t("dH")}</h2>
      <div className="dls">
        {DOWNLOADS.map(({ name, file }, index) => {
          const Icon = icons[index];
          return (
          <div key={name} className="dl">
            <div className="dl-copy">
              <Icon size={20} className="acc" />
              <div>
                <b>{name}</b>
                <small>{file}</small>
              </div>
            </div>
            <a
              className="btn sm"
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
          );
        })}
      </div>
      <div className="badges">
        <span>{t("oss")}</span>
        <span>MIT License</span>
      </div>
      <p className="muted">{t("install")}</p>
      <div className="code">
        <code>{cmd}</code>
        <button className="icon" onClick={copy} aria-label={t("copy")}>
          <Copy size={15} />
        </button>
      </div>
    </section>
  );
}
