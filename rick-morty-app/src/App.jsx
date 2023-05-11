//Rick & Morty API =>  https://rickandmortyapi.com/api/character
import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      <Header />

      <main className="mt-5 px-5">
        {/* Search Bar */}

        <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {characters?.map((character, index) => (
            <div key={index} className="bg-slate-300 shadow-md flex flex-col space-y-3">
              <img
                src={character.image}
                alt={character.name}
              />

              <h2>{character.name}</h2>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
