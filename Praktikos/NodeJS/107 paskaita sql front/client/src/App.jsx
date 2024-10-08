import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AddPet from './components/pages/AddPet'


const App = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/addPet" element={<AddPet />} />
    </Routes>
  );
}

export default App;