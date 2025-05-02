import './App.css';
import ProductPriceChart from './components/ProductPriceChart';

function App() {
  return (
    <div className="App">
      <ProductPriceChart productName="Milk" />
      <ProductPriceChart productName="Eggs" />
      <ProductPriceChart productName="Oil" />
    </div>
  );
}

export default App;
