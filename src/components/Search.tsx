import { ChangeEvent, FormEvent, useState } from "react";

interface SearchProps {
  onSearch: (category: string) => void;
}

function Search(props: SearchProps) {
  const [category, setCategory] = useState('');

  function handleSearchCategory(event: FormEvent) {
    event.preventDefault();
    props.onSearch(category);
  }

  function handleSearchCategoryChange(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }
  return (
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
  );
}

export default Search;