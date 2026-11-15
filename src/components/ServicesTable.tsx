import { Check } from "lucide-react";
import { useApp } from "../ctx";
import { services } from "../data/services";
import { useEffect, useRef } from "react";

export default function ServicesTable() {
  const { t } = useApp();
  const ok = <Check size={16} className="acc" aria-label="yes" />;
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
    <section id="services" className="section-shell" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal reveal-fade">{t("sH")}</h2>
        <div className="table-responsive reveal reveal-up delay-1">
          <table className="table table-dark table-hover align-middle mb-0 feature-table">
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
              {services.map((s, i) => (
                <tr key={s.n} className="reveal reveal-fade" style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}>
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
      </div>
    </section>
  );
}