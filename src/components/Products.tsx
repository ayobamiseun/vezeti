import React, { useState } from "react";
import { items } from "../data/items";
import ProductsItems from "./ProductsItems";
import SearchResult from "./SearchResult";



interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}
interface ProductsProps {
  query: any;
  isSearchActive: boolean;
  setQuery: (query: string) => void;
}

const Products: React.FC<ProductsProps> = () => {
  const [list, setList] = useState<
    { id: number; name: string; image: string; price: number }[]
  >([]);

  const [query, setQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = items.filter((item) => {
      if (e.target.value === "") return items;
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setQuery(e.target.value);
    setList(results);
  };
  return (
    <>
      <h2 className="text-2xl text-center font-semibold mb-6 pt-[100px]">
        Products List
      </h2>
      <form className="mx-auto  flex justify-center items-center">
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
            value={query}
            onChange={handleChange}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>

      {isSearchActive ? (
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6">
          {list.map((item) => (
            //@ts-ignore
            <SearchResult item={item} />
          ))}
        </ul>
      ) : (
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6">
          {items.map((item: Item) => (
            <ProductsItems key={item.id} id={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
