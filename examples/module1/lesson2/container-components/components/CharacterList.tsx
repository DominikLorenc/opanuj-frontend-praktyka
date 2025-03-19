import { useState } from 'react';
import type { Character } from '../types/Character';

function CharacterList({ characters }: { characters: Character[] }) {
  const [showAs, setShowAside] = useState<'card' | 'list'>('card');

  const toggleShowAside = () => {
    setShowAside((prevShowAside) =>
      prevShowAside === 'card' ? 'list' : 'card'
    );
  };

  return (
    <div>
      <button onClick={toggleShowAside}>
        {showAs === 'card' ? 'List View' : 'Card View'}
      </button>
      {showAs === 'card' ? (
        <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character) => (
            <li key={character.id} className="flex flex-col items-center">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </li>
          ))}
        </ol>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id} className="flex flex-col items-center">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
