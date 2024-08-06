import './App.css';

function App() {
  const kintamasis = 'what burning, roof burning - watafak'
  const a = '4';
  const b = '20';
  return (
    <> {/* fragmentas */}
    <div><h3>zdarovele</h3></div>
    <div>
      <h3>{kintamasis.toUpperCase()}</h3>
      <p>kazkas {a} + kazkas {b} gaunasi {a.concat(b)}</p>
    </div>
    </>
  );
}

export default App;
