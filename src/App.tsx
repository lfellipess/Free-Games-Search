import { useState } from "react"
import GameCard, { Game } from "./components/GameCard"
import Header from "./components/Header"
import Search from "./components/Search"

function App() {
  const [games, setGames] = useState<Game[]>([]);

  return (
    <div className='h-full bg-zinc-900 text-zinc-300'>
      <Header />
      <div className="max-w-6xl my-8 mx-auto flex justify-center">
        <main className="w-full">
          <Search />
          <GameCard />
        </main>
      </div>
    </div>
  )
}

export default App