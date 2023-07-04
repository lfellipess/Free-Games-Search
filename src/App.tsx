import Header from "./components/Header"

function App() {
  return (
    <div className='h-full bg-zinc-900 text-zinc-300'>
      <Header />

      <div className="max-w-6xl my-8 mx-auto flex justify-center">
        <main className="w-full">
          <form className="bg-zinc-800 p-2 rounded-lg flex items-center gap-8">
            <input className="rounded-lg w-full h-13 bg-zinc-900 p-4" type="text" placeholder="Nome do Jogo"/>
            <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" type="submit">Buscar</button>
          </form>
          <article className="bg-zinc-800 p-10 rounded-lg flex justify-center my-8">
            <p>GAME</p>
          </article>
        </main>
      </div>
    </div>
  )
}

export default App