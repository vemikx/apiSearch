interface SearchProps {
  value: string;
  onSearch: (value: string) => void;
}

const Search = ({ onSearch, value }: SearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleSearch} />
    </div>
  );
};
export default Search;
