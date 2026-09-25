import { useApp } from "../ctx";
import { features } from "../data/features";
export default function FeatureTable() {
  const { t, lang } = useApp();
  return (
    <section id="features" className="section-shell">
      <div className="container">
        <h2 className="section-title">{t("fH")}</h2>
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0 feature-table">
            <thead>
              <tr>
                <th style={{ width: 56 }} className="text-center"></th>
                <th>{t("fName")}</th>
                <th>{t("fDesc")}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => {
                const I = f.icon;
                const [n, d] = f[lang];
                return (
                  <tr key={i}>
                    <td className="text-center">
                      <I size={16} className="acc" />
                    </td>
                    <td>
                      <b>{n}</b>
                    </td>
                    <td>{d}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
