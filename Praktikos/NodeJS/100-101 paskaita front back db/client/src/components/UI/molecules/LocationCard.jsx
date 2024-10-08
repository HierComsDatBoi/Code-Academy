import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 500px;

  padding: 10px 20px;
  border: 1px solid black;
  
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

const LocationCard = ({ data }) => {
  return (
    <StyledDiv>
      <h2>{data.name}</h2>
      <p>Located in: <b>{data.country}</b></p>
      <h4>Coordinates:</h4>
      <p className="coordinates">
        <span>Latitude: <b>{data.location.latitude}</b></span>
        <span>Longitude: <b>{data.location.longitude}</b></span>
      </p>
      {/* <p>{data.description}</p> */}
      <Link to={data._id}>Read more</Link>
    </StyledDiv>
  );
}
 
export default LocationCard;