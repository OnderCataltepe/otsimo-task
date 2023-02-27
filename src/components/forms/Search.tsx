import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
interface SRProps {
  closeMenu?: () => void;
}
const Search = ({ closeMenu }: SRProps): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchRef.current && searchRef.current.value.trim().length > 2) {
      navigate(`/search/${searchRef.current.value.trim()}`);
      searchRef.current.value = '';
      {
        closeMenu && closeMenu();
      }
    } else {
      alert('Enter at least three characters');
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative flex h-10 w-2/3 items-center overflow-hidden rounded-lg md:h-8 md:w-full ">
      <div className="grid h-full w-12 place-items-center bg-gray-100">
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </div>

      <input
        className="h-full w-full bg-gray-100 py-1 pr-2 font-lato outline-none"
        type="text"
        id="search"
        ref={searchRef}
        placeholder="Search meal.."
      />
    </form>
  );
};

export default Search;
