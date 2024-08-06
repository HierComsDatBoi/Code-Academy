const Card = () => {

  //fetch

  return ( 
    <>
    <div className="card">
      <div className="cardImage">
        <img 
        src="https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Random" />
      </div>
      <div className="cardInfo">
        <span>ID</span>
        <span>Status</span>
        <h3>Name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequuntur?</p>
      </div>
    </div>
    </>
   );
}
 
export default Card;