import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { T, Lang } from "./data/i18n";
type C = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  theme: string;
  toggleTheme: () => void;
  toast: (m: string) => void;
};
const Ctx = createContext<C>(null!);
export const useApp = () => useContext(Ctx);
export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const [theme, setTheme] = useState("dark");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
  }, [theme, lang]);
  const toast = useCallback((m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(""), 2200);
  }, []);
  const t = (k: string) => T[lang][k] ?? k;
  return (
    <Ctx.Provider
      value={{
        lang,
        setLang,
        t,
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
        toast,
      }}
    >
      {children}
      <div className={"toast" + (msg ? " on" : "")} role="status">
        {msg}
      </div>
    </Ctx.Provider>
  );
}
