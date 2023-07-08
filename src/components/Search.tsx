function Search() {
    return (
        <form className="bg-zinc-800 p-2 rounded-lg flex flex-col items-center gap-8">
      <input
        className="rounded-lg w-full h-13 bg-zinc-900 p-4"
        type="text"
        placeholder="Nome do Jogo"
      />
      <input
        className="rounded-lg w-full h-13 bg-zinc-900 p-4"
        type="text"
        placeholder="Categoria"
      />
      <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" type="submit">
        Buscar
      </button>
    </form>
    );
}

export default Search;