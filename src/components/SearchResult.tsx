import React, {useState} from 'react';


interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    
  }
  

const SearchResult:  React.FC<{  item: Item }> = ({ item }) => {

  return (
    <div>
    
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
  
       <div className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.name}k</p>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>
  
      
      
    </div>
  </div>
    </div>
  );
};

export default SearchResult;
