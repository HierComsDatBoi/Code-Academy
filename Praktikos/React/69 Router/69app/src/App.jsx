import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';

function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/shop' element={<h1>Shuopas</h1>}/>
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
