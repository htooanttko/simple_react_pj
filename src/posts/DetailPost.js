import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";

const DetailPost = () => {
  const { id } = useParams();
  const history = useNavigate();

  const posts = useStoreState((state) => state.posts);

  const post = posts.filter((post) => post.id.toString() === id);
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditDes = useStoreActions((actions) => actions.setEditDes);

  useEffect(()=>{
    setEditTitle(post[0].title);
    setEditDes(post[0].description);
  },[])

  const remove = () => {
    deletePost(post[0].id);
    history("/");
  };

  return (
    <div className=" col-8 offset-2 p-5 shadow mt-5">
      <h4 className=" pb-3">{post[0].title}</h4>
      <p>{post[0].description}</p>
      <div className=" col-2 offset-10 d-flex">
        <Link to={`/post/edit/${post[0].id}`}>
          <button className=" btn btn-secondary me-3">Edit</button>
        </Link>
        <button className=" btn btn-danger " onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DetailPost;
