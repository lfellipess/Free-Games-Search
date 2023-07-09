export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
  developer: string;
  short_description: string;
}

function GameCard(props: Game) {
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
    </article>
  );
}

export default GameCard;