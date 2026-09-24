import { Check } from "lucide-react";
import { useApp } from "../ctx";
import { services } from "../data/services";
export default function ServicesTable() {
  const { t } = useApp();
  const ok = <Check size={16} className="acc" aria-label="yes" />;
  return (
    <section id="services">
      <h2>{t("sH")}</h2>
      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th>{t("sName")}</th>
              <th>{t("sSearch")}</th>
              <th>{t("sPl")}</th>
              <th>{t("sUrl")}</th>
              <th>{t("sQ")}</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.n}>
                <td>
                  <b>{s.n}</b>
                </td>
                <td>{ok}</td>
                <td>{ok}</td>
                <td>{ok}</td>
                <td>{s.q === "prev" || s.q === "audio" ? t(s.q) : s.q}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
