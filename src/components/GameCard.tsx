export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    genre: string;
    platform: string
}

function GameCard() {
    return (
        <article className="bg-zinc-800 p-10 rounded-lg flex justify-center my-8">
      <div>
        <h2>title</h2>
        <p>genre</p>
        <p>platform</p>
      </div>
    </article>
    );
}

export default GameCard;