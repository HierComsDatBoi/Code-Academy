import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  
  const petType = '';

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false)

  
  const filter = (petType) => {
    setLoading(true)
    fetch(`http://localhost:5500/pets/${petType}`)
    .then(res => res.json())
    .then(data => {
      setPets(data)
      setLoading(false)
    }
    )
  };

  useEffect(() => {
    filter(petType)
  }, []);

  return (
    <section>
      <h2>Pets</h2>
      <Link to={'/addPet'}>Add New Pet</Link>
      <div>
        <button onClick={() => filter('dog')}>Dog filter</button>
        <button onClick={() => filter('cat')}>Cat filter</button>
        <button onClick={() => filter('goat')}>Goat filter</button>
        <button onClick={() => filter('tutel')}>Tutel filter</button>
        <button onClick={() => filter('')}>Filter: none</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          { loading ? 
          <p>Loading...</p> :  
            pets.map(el =>
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.type}</td>
                <td>{el.age}</td>
              </tr>
            ) 
          }
        </tbody>
      </table>
    </section>
  );
}

export default Home;