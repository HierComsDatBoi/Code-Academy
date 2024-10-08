import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LocationsContext from "../../../contexts/LocationsContext";
import LocationCard from "../../UI/molecules/LocationCard";
import Pagination from "../../UI/organisms/Pagination";

const StyledSection = styled.section`
  
  > div.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 10px;
  }
`;

const LocationsPage = () => {

  const { locations } = useContext(LocationsContext);

  return (
    <StyledSection>
      <Link to='add'>Add New Landmark</Link>
      <h2>Famous landmarks saved on our page</h2>

      <Pagination />

      <div className="list">
        {
          locations.map(el => 
            <LocationCard
              key={el._id}
              data={el}
            />
          )
        }
      </div>
    </StyledSection>
  );
}
 
export default LocationsPage;