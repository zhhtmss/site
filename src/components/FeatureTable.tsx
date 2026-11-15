import { useApp } from "../ctx";
import { features } from "../data/features";
import { useEffect, useRef } from "react";

export default function FeatureTable() {
  const { t, lang } = useApp();
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
    <section id="features" className="section-shell" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal reveal-fade">{t("fH")}</h2>
        <div className="table-responsive reveal reveal-up delay-1">
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
                  <tr key={i} className="reveal reveal-fade" style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}>
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