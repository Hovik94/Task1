import { FilterProvider } from './context/FilterContext';
import ProductCatalog from './components/ProductCatalog';

import './App.css';

function App() {
  return (
    <FilterProvider>
      <ProductCatalog />
    </FilterProvider>
  );
}

export default App;
