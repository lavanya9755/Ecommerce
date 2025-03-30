import logo from './logo.svg';
import './App.css';

import HomePage from './customers/Pages/HomePage/HomePage';
import Navigation from './customers/components/Navigation/Navigation';   //no error

function App() {
  return (
    <div className="App">
      <Navigation/>
     <div>
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
