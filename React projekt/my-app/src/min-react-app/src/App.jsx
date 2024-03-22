import './App.css'; // Importering av CSS-stilen for komponenten
import React, { useState } from 'react'; // Importering av nødvendige funksjoner og React fra 'react'-biblioteket
import { resources } from './Components/ressurser'; // Importering av ressursene fra en separat fil

const App = () => { // Definisjon av React-komponenten 'App'
  const [selectedCategory, setSelectedCategory] = useState('HTML'); // Oppretting av tilstand for valgt kategori med useState-hook

  const resource = resources.find(r => r.category.toLowerCase() === selectedCategory.toLowerCase()); // Finn ressursen som tilhører den valgte kategorien

  return ( // Returnerer JSX for å representere komponenten
    <div id="container">
      <nav>
        {resources.map((res, index) => (
          <button key={index} onClick={() => setSelectedCategory(res.category)}>
            {res.category}
          </button>
        ))}
      </nav>

      {resource && (
        <article>
          <h1>{resource.category}</h1>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map(({ title, url }, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      )}

      {!resource && <p>Ingen ressurser funnet for kategorien {selectedCategory}.</p>}
    </div>
  );
};

export default App; // Eksporterer App-komponenten som standard