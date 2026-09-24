import { useApp } from "../ctx";
export default function HowItWorks() {
  const { t } = useApp();
  return (
    <section>
      <h2>{t("hH")}</h2>
      <div className="steps">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="step">
            <span className="num">0{i}</span>
            <b>{t("h" + i)}</b>
            <p className="muted">{t("h" + i + "d")}</p>
          </div>
        ))}
      </div>
      <h2>{t("wH")}</h2>
      <ul className="why">
        {t("w")
          .split("|")
          .map((x) => (
            <li key={x}>{x}</li>
          ))}
      </ul>
    </section>
  );
}
