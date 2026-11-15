import { useApp } from "../ctx";
import { useEffect, useRef } from "react";

export default function SecuritySection() {
  const { t } = useApp();
  const a = t("sec").split("|");
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
    <section id="security" className="section-shell" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal reveal-fade">{t("secH")}</h2>
        <div className="steps reveal reveal-up delay-1">
          {[0, 2, 4, 6].map((i, idx) => (
            <div key={i} className="step reveal reveal-scale" style={{ animationDelay: `${0.1 + idx * 0.08}s` }}>
              <b>{a[i]}</b>
              <p className="muted">{a[i + 1]}</p>
            </div>
          ))}
        </div>
        <p className="muted reveal reveal-fade delay-2">{t("secNote")}</p>
      </div>
    </section>
  );
}