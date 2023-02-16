import Main from './pages/Main';
import Product from './pages/Product';
import Basket from './pages/Basket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/commons/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/main" element={<Main />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/basket" element={<Basket />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
