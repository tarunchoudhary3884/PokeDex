import { RiSearchLine } from "react-icons/ri";
import { debounce } from "./debounce";
function Search({ setSearchValue }) {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const debouncedHandleSearch = debounce(handleSearch, 300);
  return (
    <form
      className="flex justify-center items-center p-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex mx-auto">
        <input
          type="text"
          className="w-56 h-10 p-2 focus:outline-none border-gray-500 border-l-2 border-y-2"
          placeholder="Search Eg. Pikachu"
          name="search"
          required
          onChange={debouncedHandleSearch}
        />
        <RiSearchLine className="h-10 w-10 p-2 text-2xl text-primaryColor bg-black" />
      </div>
    </form>
  );
}

export default Search;
