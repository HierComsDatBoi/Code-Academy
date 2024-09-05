import { createContext, useReducer, useEffect } from "react";

const PostsContext = createContext();

export const PostsActionTypes = {
  setInitialData: "Aplikacijos paleidimo metu, nustato state'o pradinę būseną"
}

const reducer = (state, action) => {
  switch(action.type){
    case PostsActionTypes.setInitialData:
      return action.allData;
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {

  const [posts, setPosts] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8080/posts`)
      .then(res => res.json())
      .then(data => setPosts({
        type: PostsActionTypes.setInitialData,
        allData: data
      }))
  },[]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export { PostsProvider };
export default PostsContext;