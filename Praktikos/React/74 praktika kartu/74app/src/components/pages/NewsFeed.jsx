import { useContext } from "react";

import PostsContext from "../../contexts/PostsContext";
import PostCard from "../UI/organisms/PostCard";

const NewsFeed = () => {

  const { posts } = useContext(PostsContext);

  return (
    <section>
      <h2>Latest Posts</h2>
      <div>
        {
          posts.map(post => 
            <PostCard
              key={post.id}
              data={post}
            />
          )
        }
      </div>
    </section>
  );
}

export default NewsFeed;