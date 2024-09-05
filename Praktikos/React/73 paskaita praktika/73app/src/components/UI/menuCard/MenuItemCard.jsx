import { useNavigate } from "react-router-dom";

const MenuCard = ({data}) => {
  const navigate = useNavigate();
  return ( 
    <div className="menuItemCard"
    onClick={()=> navigate(`item/${data.id}`)} >
    <h3>{data.title}</h3>
    <div>
    <img src={data.image} alt={data.title} />
    </div>
    <p>{data.description}</p>
    <p>{data.price + "\u20ac"}</p>
    <p>More info</p>
    </div>
   );
}
 
export default MenuCard;