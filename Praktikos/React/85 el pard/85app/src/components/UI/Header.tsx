import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 80px;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav{
    > ul{
      margin: 0;
      padding: 0;

      display: flex;
      gap: 10px;

      > li{
        list-style-type: none;

        > a{
          text-decoration: none;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <span>logo</span>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
      </nav>
      <div>
        login logout user
      </div>
    </StyledHeader>
  );
}
 
export default Header;