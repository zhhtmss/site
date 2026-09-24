import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Library,
  Star,
  ListMusic,
  History,
} from "lucide-react";
import { useApp } from "../ctx";
const q = [
  ["Night Drive", "Kvant"],
  ["Glow Room", "Mira Sol"],
  ["Low Tide", "Ostrov"],
  ["Signal", "Nord FM"],
];
export default function DemoPlayer() {
  const { t } = useApp();
  const [play, setPlay] = useState(true);
  const [cur, setCur] = useState(0);
  const nav = [
    [Library, "lib"],
    [Star, "fav"],
    [ListMusic, "pls"],
    [History, "hist"],
  ] as const;
  const step = (d: number) => setCur((cur + d + q.length) % q.length);
  return (
    <section>
      <h2>{t("iH")}</h2>
      <div className="mock">
        <aside>
          {nav.map(([I, k], i) => (
            <div key={k} className={"mi" + (i === 0 ? " on" : "")}>
              <I size={14} />
              {t(k)}
            </div>
          ))}
        </aside>
        <div className="center">
          <div className="cover">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <b>{q[cur][0]}</b>
          <span className="muted">{q[cur][1]}</span>
          <div className="prog">
            <i style={{ width: "42%" }} />
          </div>
          <div className="ctl">
            <button onClick={() => step(-1)} aria-label="Previous">
              <SkipBack size={18} />
            </button>
            <button
              className="pp"
              onClick={() => setPlay(!play)}
              aria-label={play ? "Pause" : "Play"}
            >
              {play ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button onClick={() => step(1)} aria-label="Next">
              <SkipForward size={18} />
            </button>
          </div>
        </div>
        <aside>
          <div className="muted qh">{t("queue")}</div>
          {q.map((x, i) => (
            <div
              key={x[0]}
              className={"mi" + (i === cur ? " on" : "")}
              onClick={() => setCur(i)}
            >
              {x[0]}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
