import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleItem = () => {

  const [itemInfo, setItemInfo] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/coffee/${id}`)
      .then(res => res.json())
      .then(data => setItemInfo(data))
  });

  return (
    <section>
      <button onClick={()=> navigate(-1)} >Back to menu</button>
      <h3>{itemInfo.title}</h3>
      <div>
        <img src={itemInfo.image} alt={itemInfo.title} />
      </div>
      <p>{itemInfo.description}</p>
      <p>{itemInfo.price + "\u20ac"}</p>
    </section>
  );
}

export default SingleItem;