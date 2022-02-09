import './App.css';
import List from "./components/List";
import Map from "./components/Map";
import Header from "./components/Header";

let App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">  
        <List />
        <Map />
      </div>
    </div>
  );
}

export default App;
