import { useApp } from "../ctx";
export default function SecuritySection() {
  const { t } = useApp();
  const a = t("sec").split("|");
  return (
    <section id="security">
      <h2>{t("secH")}</h2>
      <div className="steps">
        {[0, 2, 4, 6].map((i) => (
          <div key={i} className="step">
            <b>{a[i]}</b>
            <p className="muted">{a[i + 1]}</p>
          </div>
        ))}
      </div>
      <p className="muted">{t("secNote")}</p>
    </section>
  );
}
