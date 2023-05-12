//Rick & Morty API =>  https://rickandmortyapi.com/api/character
import { useState, useEffect } from 'react';
import { Header, Card, SearchBar } from '../components';

function HomePage() {
  const [characters, setCharacters] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [searchTerm]);

  const searchCharacter = (textEntered) =>
    setSearchTerm(textEntered);

  const resetSearch = () => setSearchTerm('');

  return (
    <>
      <Header />

      <main className="mt-5 px-5">
        {/* Search Bar */}
        <SearchBar searchCharacter={searchCharacter} />

        {searchTerm ? (
          <button
            onClick={resetSearch}
            className="text-white bg-red-700 mb-8 hover:red-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Reset Filter
          </button>
        ) : undefined}

        <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {characters ? (
            characters?.map((character, index) => (
              <Card key={index} character={character} />
            ))
          ) : (
            <div>
              <h2 className="text-red-600 text-2xl text-bold">
                Character Not Found 😭
              </h2>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default HomePage;
