import { useApp } from "../ctx";
import { features } from "../data/features";
export default function FeatureTable() {
  const { t, lang } = useApp();
  return (
    <section id="features">
      <h2>{t("fH")}</h2>
      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th style={{ width: 56 }}></th>
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
                  <td>
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
    </section>
  );
}
