import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { useApp } from "../ctx";
import { GH } from "../data/i18n";
import Logo from "./Logo";
export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const links: [string, string][] = [
    ["features", "/#features"],
    ["download", "/download"],
  ];
  const active = (to: string) => {
    const [p, h = ""] = to.split("#");
    return pathname === p && (h ? hash === "#" + h : !hash);
  };
  return (
    <header className="hdr">
      <div className="container">
        <nav className="navbar navbar-expand-lg px-0">
          <Link to="/" className="navbar-brand brand" onClick={() => setOpen(false)}>
            <Logo size={28} />
            <span>SanGlow</span>
          </Link>

          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label={t("menu")}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className={"collapse navbar-collapse" + (open ? " show" : "")} id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map(([k, to]) => (
                <li key={k} className="nav-item">
                  <Link
                    to={to}
                    className={"nav-link" + (active(to) ? " active" : "")}
                    onClick={() => setOpen(false)}
                  >
                    {t(k)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-end">
              <div className="seg" role="group" aria-label="Language">
                {(["ru", "en"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={lang === l ? "on" : ""}
                    onClick={() => setLang(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="icon"
                onClick={toggleTheme}
                aria-label={t("theme")}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a
                className="btn btn-sm btn-outline-light d-none d-md-inline-flex"
                href={GH}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
