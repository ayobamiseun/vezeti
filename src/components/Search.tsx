import React, {useState} from 'react';
import { items } from 'data/items';
import SearchResult from './SearchResult';

interface State {
  
  list: any[];
  results: any;
  query: string;
  setQuery: any;
  isSearchActive:boolean;
 
}


const Search:  React.FC<State> = () =>  {
//   const [state, setState] = useState<State>({
//     query: '',
//     list: []
//   });
  const [list, setList] = useState<{ id: number; name: string; image: string; price: number; }[]>([])
  
  const [query, setQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = items.filter((item) => {
      if (e.target.value === '') return items;
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setQuery(e.target.value);
    setList(
      results
    );
  };

  return (
    <div>
    
    <form className="max-w-sm px-4 ">
    <div className="relative">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            placeholder="Search"
            value={query} onChange={handleChange}
            onFocus={() => setIsSearchActive(true)} onBlur={() => setIsSearchActive(false)}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
    </div>

    </form>
        {query === '' ? "search for item" : !list.length ? "Your query did not return any results" : (
          list.map((item) => {
        
            return  <SearchResult  item={item} />;

            
          })
        )}
      
    </div>
  );
};

export default Search;
