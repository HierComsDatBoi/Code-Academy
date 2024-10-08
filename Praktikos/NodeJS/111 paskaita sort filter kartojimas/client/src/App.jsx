import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const StyledSection = styled.section`
  > h2{
    text-align: center;
    font-size: 3rem;
  }

  > div{
    min-height: 100vh;
    display: grid;
    gap: 5px;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100px 1fr;

    > div{
      border: 3px solid black;
      padding: 10px;
    }
    > div:nth-child(1){
      grid-area: 1 / 1 / 3 / 2;

      > form > div{
        display: flex;
        flex-direction: column;
      }
    }
    > div:nth-child(2){
      grid-area: 1 / 2 / 2 / 3;
    }
    > div:nth-child(3){
      grid-area: 2 / 2 / 3 / 3;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      
      > div {
        border: 1px solid black;
        min-height: 350px;
        width: 200px;
      }
    }
  }
`;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [formInputs, setFormInputs] = useState({
    year_gte: '',
    year_lte: '',
    runtime_gte: '',
    runtime_lte: '',
    imdbRating_gte: '',
    imdbRating_lte: '',
    title: '',
    genres_in: []
  });
  const formInputControl = (e) => {
    if(e.target.type === 'checkbox'){
      console.log('keiciasi checkbox');
      if(e.target.checked === true){ // pridedame žanrą
        setFormInputs({
          ...formInputs,
          [e.target.name]: [...formInputs.genres_in, e.target.value]
        });
      } else { // išimame žanrą
        setFormInputs({
          ...formInputs,
          [e.target.name]: formInputs.genres_in.filter(genre => genre !== e.target.value)
        });
      }
    } else {
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
      });
    }
  }
  let filterString = useRef('');
  let sortString = useRef('');

  useEffect(()=>{
    fetch(`http://localhost:5500/moviesA`)
      .then(res => res.json())
      .then(data => setMovies(data))
  }, []);

  const fetchOrdered = (e) => {
    // console.log(e.target.value);
    sortString.current = `sort_${e.target.value}`;
    fetch(`http://localhost:5500/moviesA?${filterString.current}&${sortString.current}`)
      .then(res => res.json())
      .then(data => setMovies(data))
  }

  const fetchFiltered = (e) => {
    e.preventDefault();
    // console.log(formInputs);
    // console.log(Object.keys(formInputs));
    filterString.current = '';
    Object.keys(formInputs).forEach(key => {
      // console.log('key: ', key);
      // console.log('value: ', formInputs[key]);
      if(formInputs[key]){
        if(key === 'imdbRating_lte'){
          filterString.current += `filter_imdb.rating_lte=${formInputs[key]}&`;
        } else if(key === 'imdbRating_gte'){
          filterString.current += `filter_imdb.rating_gte=${formInputs[key]}&`;
        } else if(key === 'genres_in'){
          if(formInputs.genres_in.length > 0){
            filterString.current += `filter_${key}=${formInputs[key].join(',')}`;
          }
        } else {
          filterString.current += `filter_${key}=${formInputs[key]}&`;
        }
      }
    });
    // console.log(filterString.current);
    // from { year_gte: 1990, year_lte: 2000, runtime_gte: 30, runtime_lte: 90 }
    // to filter_year_gte=1990&filter_year_lte=2000&filter_runtime_gte=30&filter_runtime_lte=90
    fetch(`http://localhost:5500/moviesA?${filterString.current}&${sortString.current}`)
      .then(res => res.json())
      .then(data => setMovies(data))
  }

  return (
    <StyledSection>
      <h2>Pavadinimas</h2>
      <div>
        {/* Filtravimas */}
        <div> 
          <h4>Filtruojame</h4>
          <form onSubmit={fetchFiltered}>
            <div>
              <label htmlFor="title">Title:</label>
              <input 
                type="text"
                id="title" name="title"
                value={formInputs.title}
                onChange={formInputControl}
              />
            </div>
            <div>
              <fieldset>
                <legend>Select the genres:</legend>
                <div>
                  <label htmlFor="action">Action</label>
                  <input
                    type="checkbox" 
                    name="genres_in" id="action"
                    value="Action"
                    onChange={formInputControl} 
                  />
                </div>
                <div>
                  <label htmlFor="drama">Drama</label>
                  <input
                    type="checkbox" 
                    name="genres_in" id="drama"
                    value="Drama"
                    onChange={formInputControl} 
                  />
                </div>
                <div>
                  <label htmlFor="comedy">Comedy</label>
                  <input
                    type="checkbox" 
                    name="genres_in" id="comedy"
                    value="Comedy"
                    onChange={formInputControl} 
                  />
                </div>
                <div>
                  <label htmlFor="animation">Animation</label>
                  <input
                    type="checkbox" 
                    name="genres_in" id="animation"
                    value="Animation"
                    onChange={formInputControl} 
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <label htmlFor="year_gte">Year from:</label>
              <input 
                type="number"
                id="year_gte" name="year_gte"
                max={formInputs.year_lte}
                value={formInputs.year_gte}
                onChange={formInputControl}
              />
            </div>
            <div>
              <label htmlFor="year_lte">Year to:</label>
              <input 
                type="number"
                id="year_lte" name="year_lte"
                min={formInputs.year_gte}
                value={formInputs.year_lte}
                onChange={formInputControl}
              />
            </div>
            <div>
              <label htmlFor="runtime_gte">Length from:</label>
              <input 
                type="number"
                id="runtime_gte" name="runtime_gte"
                max={formInputs.runtime_lte}
                value={formInputs.runtime_gte}
                onChange={formInputControl}
              />
            </div>
            <div>
              <label htmlFor="runtime_lte">Length to:</label>
              <input 
                type="number"
                id="runtime_lte" name="runtime_lte"
                min={formInputs.runtime_gte}
                value={formInputs.runtime_lte}
                onChange={formInputControl}
              />
            </div>
            <div>
              <label htmlFor="imdbRating_gte">IMDB rating from:</label>
              <input 
                type="number"
                id="imdbRating_gte" name="imdbRating_gte"
                max={formInputs.imdbRating_lte}
                value={formInputs.imdbRating_gte}
                onChange={formInputControl}
              />
            </div>
            <div>
              <label htmlFor="imdbRating_lte">IMDB rating to:</label>
              <input 
                type="number"
                id="imdbRating_lte" name="imdbRating_lte"
                min={formInputs.imdbRating_gte}
                value={formInputs.imdbRating_lte}
                onChange={formInputControl}
              />
            </div>
            <input type="submit" value="Filter" />
          </form>
        </div>
        {/* Rikiavimas */}
        <div>
          <h4>Rikiuojame</h4>
          <button
            value={'year=1'}
            onClick={fetchOrdered}
          >YearASC</button>
          <button
            value={'year=-1'}
            onClick={fetchOrdered}
          >YearDESC</button>
          <button
            value={'runtime=1'}
            onClick={fetchOrdered}
          >LengthASC</button>
          <button
            value={'runtime=-1'}
            onClick={fetchOrdered}
          >LengthDESC</button>
          <button
            value={'imdb.rating=1'}
            onClick={fetchOrdered}
          >IMDB rating ASC</button>
          <button
            value={'imdb.rating=-1'}
            onClick={fetchOrdered}
          >IMDB rating DESC</button>
        </div>
        {/* DATA */}
        <div>
          {
            movies.map(movie => 
              <div key={movie._id}>
                <h3>{movie.title}</h3>
                <p>Description: {movie.plot}</p>
                <p>Length: {movie.runtime} minutes</p>
                <p>Release year: {movie.year}</p>
                <p>IMDB rating: {movie.imdb.rating}</p>
                <p>Genres: {movie.genres?.join('; ')}</p>
              </div>
            )
          }
        </div>
      </div>
    </StyledSection>
  );
}

export default App;