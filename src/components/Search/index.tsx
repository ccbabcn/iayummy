type SearchProps = {
  onSearch: (ingredients: string) => void;
};

function Search({ onSearch }: SearchProps): JSX.Element {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(event.currentTarget.search.value);
  };

  return (
    <form onSubmit={(event) => handleOnSubmit(event)} autoComplete="off">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Huevos, leche..."
        className="font-medium text-black"
      />
      <button>Buscar</button>
    </form>
  );
}

export default Search;
