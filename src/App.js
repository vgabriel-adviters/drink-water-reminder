import './App.css';
import Header from './components/Header/Header';
import WaterVendingMachine from './components/WaterVendingMachine/WaterVendingMachine';

function App() {
  return (
    <div className="App">
      <Header tittle={"Drink Water"} />
      <div className="water-vending-machine-container">
        <WaterVendingMachine />
      </div>
    </div>
  );
}

export default App;
