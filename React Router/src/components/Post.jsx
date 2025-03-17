import React from "react";
import { useParams,Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Title One",
    body: "Body-One",
  },
  {
    id: 2,
    title: "Title Two",
    body: "Body-Two",
  },
  {
    id: 3,
    title: "Title Three",
    body: "Body-Three",
  },
];

function Post() {
  //based on id ==> fetch on backend ==> find data based on Post ID

  const { id } = useParams;
  console.log(id);
  const post = posts.find(p => p.id == Number(id));
  return (
    <div>
      <h1>{posts.title}</h1>
      <div>Post ID:{posts.id} </div>
      <p>{posts.body}</p>
      <Link to="/app/posts">Go to Posts</Link>
    </div>
  );
}

export default Post;
