const PostCard = ({ data }) => {
  return (
    <div>
      <p>
        <span>{data.authorName}</span>
        <span>{data.dateTime}</span>
      </p>
      <p>{data.content}</p>
      <img
        src={data.attachedImage}
        alt={data.content.slice(0, 20)}
      />
    </div>
  );
}
 
export default PostCard;