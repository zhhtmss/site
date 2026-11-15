import { useApp } from "../ctx";
import { useEffect, useRef } from "react";

export default function HowItWorks() {
  const { t } = useApp();
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
    <section className="section-shell" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal reveal-fade">{t("hH")}</h2>
        <div className="steps reveal reveal-up delay-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="step reveal reveal-scale" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <span className="num">0{i}</span>
              <b>{t("h" + i)}</b>
              <p className="muted">{t("h" + i + "d")}</p>
            </div>
          ))}
        </div>
        <h2 className="section-title reveal reveal-fade delay-2">{t("wH")}</h2>
        <ul className="why reveal reveal-up delay-3">
          {t("w")
            .split("|")
            .map((x, i) => (
              <li key={x} className="reveal reveal-fade" style={{ animationDelay: `${i * 0.06}s` }}>
                {x}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}