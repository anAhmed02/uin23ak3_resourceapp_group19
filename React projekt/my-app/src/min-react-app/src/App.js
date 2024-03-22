import './App.css'; //importerer filer fra app.css filen
import React, { useState } from 'react'; //importerer react og usestate fra react-pakken
import { resources } from './components/ressurser'; //importerer ressursene fra ressurser.js-filen

// Definerer App-komponenten som en funksjonell komponent
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('HTML'); //Oppretter en tilstand for den valgte kategorien ('selectedCategory') med 'HTML' som startverdi

  const resource = resources.find(r => r.category.toLowerCase() === selectedCategory.toLowerCase()); //henter ressurser som matcher den valgte kategorien fra ressurser

  return (
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

export default App; //eksporterer app-komponentet som standard