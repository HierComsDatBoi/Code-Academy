import { Routes, Route } from 'react-router-dom';
import BaseOutlet from './components/outlets/BaseOutlet';
import Home from './components/pages/Home';
import About from './components/pages/About';
import LocationsPage from './components/pages/locations/LocationsPage';
import LocationPage from './components/pages/locations/LocationPage';
import AddLocation from './components/pages/locations/AddLocation';
import EditLocation from './components/pages/locations/EditLocation';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<BaseOutlet />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations">
          <Route index element={<LocationsPage /> }/> {/* visų lokacijų puslapis */}
          <Route path=':id' element={<LocationPage /> }/> {/* vienos lokacijos puslapis */}
          <Route path='add' element={<AddLocation /> }/> {/* naujos lokacijos pridėjimo puslapis */}
          <Route path='edit/:id' element={<EditLocation /> }/> {/* lokacijos redagavimo puslapis */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;