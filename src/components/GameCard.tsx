import { useState } from "react";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
  developer: string;
  short_description: string;
}

interface GameCardProps extends Game {
  onUnfavorite?: (id: number) => void;
}

function GameCard(props: GameCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(true);
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = [...storedFavorites, props]
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  function handleUnfavorite() {
    setIsFavorite(false);
    props.onUnfavorite && props.onUnfavorite(props.id);
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = storedFavorites.filter((game: Game) => game.id !== props.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
    <article className="bg-zinc-800 rounded-lg flex justify-stretch my-8 p-6 gap-8">
      <img className="rounded-lg" src={props.thumbnail} alt={props.title} />
      <div className="flex flex-col gap-4 justify-center">
        <h2>Título: {props.title}</h2>
        <p>Gênero: {props.genre}</p>
        <p>Plataforma: {props.platform}</p>
        <p>Desenvolvedora: {props.developer}</p>
        <p>Descrição: {props.short_description}</p>
      </div>
      <div className="flex items-center">
        {isFavorite ? (
          <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" onClick={handleUnfavorite}>Unfavorite</button>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" onClick={handleFavorite}>Favorite</button>
        )}
      </div>
    </article>
  );
}

export default GameCard;