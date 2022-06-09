import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Pages/Home';
import Meals from './Component/Pages/Meals';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/meals' element={<Meals></Meals>}></Route>
      </Routes>
    </div>
  );
}

export default App;
