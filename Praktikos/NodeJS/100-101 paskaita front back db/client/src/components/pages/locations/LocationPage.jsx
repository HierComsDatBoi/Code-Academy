import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  > *{
    margin: 0;
  }

  > p.coordinates{
    display: flex;
    gap: 10px;
  }
`;

const LocationPage = () => {

  const { id } = useParams();
  const [data, setData] = useState('');
  useEffect(() => {
    fetch(`http://localhost:5500/locations/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
    <StyledSection>
      <Link to={-1}>Go back</Link>
      {
        data ? 
        <>
          <h2>{data.name}</h2>
          <p>Located in: <b>{data.country}</b></p>
          <h4>Coordinates:</h4>
          <p className="coordinates">
            <span>Latitude: <b>{data.location.latitude}</b></span>
            <span>Longitude: <b>{data.location.longitude}</b></span>
          </p>
          <p>{data.description}</p>
          <br /><br /><br /><br /><br />
          <p>Picture? Pictures Carrusel?</p>
          <p>leaflet map of location zoomed a bit?</p>
          {/* <button>Delete (modal)</button> */}
          <Link to={`/locations/edit/${data._id}`}>Edit</Link>
        </> : null
      }
    </StyledSection>
  );
}
 
export default LocationPage;