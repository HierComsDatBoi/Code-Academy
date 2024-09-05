import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Cards from './components/pages/cards/Cards';
import Error from './components/pages/error/Error';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import BaseOutlet from './components/pages/baseOutlet/BaseOutlet';
import SingleItem from './components/pages/singleItem/SingleItem';
import CardsOutlet from './components/pages/cardsOutlet/CardsOutlet';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='' element={<BaseOutlet />} >
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<CardsOutlet />} >
            <Route index element={<Cards />} />
            <Route path="/cards/item/:id" element={<SingleItem />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
