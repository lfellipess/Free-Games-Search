import { ChangeEvent, FormEvent, useState } from "react";

interface SearchProps {
  onSearchByCategory: (category: string) => void;
  onSearchByTitle: (title: string) => void;
}

function Search(props: SearchProps) {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [typeSearch, setTypeSearch] = useState('category');

  function handleSearchCategory(event: FormEvent) {
    event.preventDefault();
    props.onSearchByCategory(category);
    setCategory('');
  }

  function handleSearchTitle(event: FormEvent) {
    event.preventDefault();
    props.onSearchByTitle(title);
    setTitle('');
  }

  function handleSearchCategoryChange(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  function handleSearchTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleTypeSearchCategory() {
    setTypeSearch('category');
  }

  function handleTypeSearchTitle() {
    setTypeSearch('name');
  }
  return (
    <div>
      {typeSearch === 'category' ? (
        <div className="flex flex-col gap-5">
          <p>Tipo de busca: <a href="#" onClick={handleTypeSearchTitle}>Por categoria</a></p>
          <form className="flex items-center gap-8" onSubmit={handleSearchCategory}>
            <input
              className="rounded-lg w-full bg-zinc-900 p-4"
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={handleSearchCategoryChange}
            />
            <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" type="submit">
              Buscar
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <p>Tipo de busca: <a href="#" onClick={handleTypeSearchCategory}>Por Titulo</a></p>
          <form className="flex items-center gap-8" onSubmit={handleSearchTitle}>
            <input
              className="rounded-lg w-full bg-zinc-900 p-4"
              type="text"
              placeholder="Titulo"
              value={title}
              onChange={handleSearchTitleChange}
            />
            <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-lg py-4 px-6 text-white" type="submit">
              Buscar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Search;