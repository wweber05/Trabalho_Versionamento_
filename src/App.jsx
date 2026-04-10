import { useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    console.log(`O contador subiu para: ${count + 1}`);
  };

  return (
    <>
      <section id="center">
        <div>
        </div>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1 id="title">Trabalho Bimestral Devops</h1>
          <p>Por favor, Patrick, não quebre a gente no próximo semestre...</p>
        </div>

        <div className="card">
          <button
            className="counter"
            onClick={handleIncrement}
            style={{ color: count > 10 ? 'gold' : 'white' }}
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
