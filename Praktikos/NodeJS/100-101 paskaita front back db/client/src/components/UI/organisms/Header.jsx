import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    height: 80%;
    > img{
      height: 100%;
      width: auto;
    }
  }

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
          font-size: 1.5rem;
          font-weight: 600;

          &:hover{
            color: red;
          }
          &.active{
            color: green;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <img
          src=""
          alt=""
        />
      </Link>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/locations">Locations</NavLink></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;