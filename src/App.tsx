import { useEffect, useState } from "react"
import GameCard, { Game } from "./components/GameCard"
import Header from "./components/Header"
import Search from "./components/Search"
import { fetchGames, fetchGamesByCategory } from "./services/apiService";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const fetchGamesData = async () => {
    const results = await fetchGames();
    setGames(results);
  }

  const handleSearch = async (category: string) => {
    const results = await fetchGamesByCategory(category);
    setGames(results);
  }

  useEffect(() => {
    fetchGamesData();
  }, []);

  return (
    <div className='h-full bg-zinc-900 text-zinc-300'>
      <Header />
      <div className="max-w-6xl my-8 mx-auto flex justify-center">
        <main className="w-auto">
          <Search onSearch={handleSearch}/>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                thumbnail={game.thumbnail}
                genre={game.genre}
                platform={game.platform}
                developer={game.developer}
                short_description={game.short_description}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App