import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p,index) => (
        <Post key={index} post={p}/>
      ))}

      
    </div>
  );
}
