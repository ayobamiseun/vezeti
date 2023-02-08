import { StateInterface } from './context/globalTypes';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Cart from 'components/Cart';




function App() {
  const [query, setQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [state, setState] = useState<StateInterface>({
    products:[]
  })

 
  return (
    <>
    
    
 
    <Header />
    
    <Cart  />
  
    <Products query={query} setQuery={setQuery} isSearchActive={isSearchActive}  />
    
    <Footer />
    
    </>
  );
}

export default App;
