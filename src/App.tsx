import { useEffect, useState } from "react"
import GameCard, { Game } from "./components/GameCard"
import Header from "./components/Header"
import Search from "./components/Search"
import { fetchGames, fetchGamesByCategory } from "./services/apiService";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState('search');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const fetchGamesData = async () => {
    const results = await fetchGames();
    setGames(results);
    JSON.parse(localStorage.getItem('games') || '[]');
    localStorage.setItem('games', JSON.stringify(results));
  }

  const handleSearchByCategory = async (category: string) => {
    if (category === '') {
      const storedGames = JSON.parse(localStorage.getItem('games') || '[]');
      setGames(storedGames);
    } else {
      const results = await fetchGamesByCategory(category);
      setGames(results);
    }
  }

  function handleSearchByTitle(title: string) {
    const storedGames = JSON.parse(localStorage.getItem('games') || '[]');
    const lowercaseTitle = title.toLowerCase();
    const filteredGames = storedGames.filter((game: Game) => game.title.toLowerCase().includes(lowercaseTitle));
    setGames(filteredGames);
  }

  function handlePageSearch() {
    setPage('search');
  }

  function handlePageFavorites() {
    setPage('favorites');
  }

  useEffect(() => {
    fetchGamesData();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites).map((game: Game) => game.id));
    }
  }, [page])

  return (
    <div className='h-full bg-zinc-900 text-zinc-300'>
      <Header />
      <div className="max-w-6xl my-8 mx-auto flex justify-center">
        <main className="w-auto">
          {page === 'search' ? (
            <div>
              <div className="bg-zinc-800 p-6 rounded-lg flex flex-col gap-6">
                <Search onSearchByCategory={handleSearchByCategory} onSearchByTitle={handleSearchByTitle} />
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" onClick={handlePageFavorites}>
                    Meus Favotitos
                  </button>
                </div>
              </div>
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
                    isFavorite={favoriteIds.includes(game.id)}
                  />
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div>
                <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" onClick={handlePageSearch}>
                  Pesquisa
                </button>
              </div>
              <FavoritesPage />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App