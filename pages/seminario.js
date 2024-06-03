import React from 'react';
import logo from '../public/Seminario1.jpg'; // Exemplo de imagem
import background from '../public/Seminario1.jpg'; // Exemplo de imagem

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>Seminário Mulheres</h1>
        <h2>De corpo, alma e espírito</h2>
      </header>
      <main>
        <img src={background} alt="Background" className="background-image" />
        <div className="content">
          {/* ... (Conteúdo do seminário) ... */}
        </div>
      </main>
      <footer>
        {/* ... (Informações de contato, etc.) ... */}
      </footer>
    </div>
  );
}

export default App;
