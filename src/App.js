import './App.css';
import ProductPriceChart from './components/ProductPriceChart';

function App() {
  const dateRange = { start: "2021-01-01", end: "2029-01-01" };

  return (
    <div className="App">
      <ProductPriceChart productName="Milk" dateRange={dateRange} />
      <ProductPriceChart productName="Eggs" dateRange={dateRange}  />
      <ProductPriceChart productName="Gas" dateRange={dateRange}  />
      <ProductPriceChart productName="Rice" dateRange={dateRange}  />
      <ProductPriceChart productName="Flour" dateRange={dateRange}  />
      <ProductPriceChart productName="Butter" dateRange={dateRange}  />
    </div>
  );
}

export default App;
