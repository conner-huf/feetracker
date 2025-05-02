import './App.css';
import ProductPriceChart from './components/ProductPriceChart';

function App() {
  const dateRange = { start: "2025-01-01", end: "2029-01-01" };

  return (
    <div className="App">
      <ProductPriceChart productName="Milk" dateRange={dateRange} />
      <ProductPriceChart productName="Eggs" dateRange={dateRange}  />
      <ProductPriceChart productName="Oil" dateRange={dateRange}  />
      <ProductPriceChart productName="Rice" dateRange={dateRange}  />
      <ProductPriceChart productName="Flour" dateRange={dateRange}  />
      <ProductPriceChart productName="Butter" dateRange={dateRange}  />
      <ProductPriceChart productName="Cheese" dateRange={dateRange}  />
      <ProductPriceChart productName="Bread" dateRange={dateRange}  />
      <ProductPriceChart productName="Chicken" dateRange={dateRange}  />
      <ProductPriceChart productName="Beef" dateRange={dateRange}  />
      <ProductPriceChart productName="Pork" dateRange={dateRange}  />
      <ProductPriceChart productName="Fish" dateRange={dateRange}  />
      <ProductPriceChart productName="Vegetables" dateRange={dateRange}  />
    </div>
  );
}

export default App;
