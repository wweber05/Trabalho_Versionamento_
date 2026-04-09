import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 id="title">Trabalho Bimestral Devops</h1>
          <p>Por favor, Patrick, não quebre a gente no próximo semestre...</p>
        </div>

        <div className="card">
          <button
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Contador está em {count}
          </button>

          <button className="reset-btn" onClick={() => setCount(0)}>
            Reset
          </button>

          {count > 10 && <p>🔥 Contador passou de 10!</p>}
        </div>
      </section>

      <footer>
        <p>Patrick tem grande futuro como professor</p>
      </footer>
    </>
  );
}

export default App;
