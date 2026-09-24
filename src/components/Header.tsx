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
      <div className="bar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo size={22} />
          SanGlow
        </Link>
        <nav className={"nav" + (open ? " open" : "")}>
          {links.map(([k, to]) => (
            <Link
              key={k}
              to={to}
              className={active(to) ? "on" : ""}
              onClick={() => setOpen(false)}
            >
              {t(k)}
            </Link>
          ))}
        </nav>
        <div className="tools">
          <div className="seg" role="group" aria-label="Language">
            {(["ru", "en"] as const).map((l) => (
              <button
                key={l}
                className={lang === l ? "on" : ""}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="icon"
            onClick={toggleTheme}
            aria-label={t("theme")}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            className="btn sm hide-m"
            href={GH}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} />
            GitHub
          </a>
          <button
            className="icon burger"
            onClick={() => setOpen(!open)}
            aria-label={t("menu")}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
