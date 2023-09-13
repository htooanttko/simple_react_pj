import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams,useNavigate } from "react-router-dom";

const EditPost = () => {
  const posts = useStoreState((state) => state.posts);

  const { id } = useParams();
  const post = posts.filter((post) => (post.id).toString() === id);

  const history = useNavigate();

  const editTitle = useStoreState((state) => state.editTitle);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);

  const editDes = useStoreState((state) => state.editDes);
  const setEditDes = useStoreActions((actions) => actions.setEditDes);

  const updatePost = useStoreActions((actions) => actions.updatePost);

  const handleEdit = async () => {
    const editPost = { id: post[0].id, title: editTitle, description: editDes };
    updatePost(editPost);
    history("/");
    window.location.reload();
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" col-4 offset-4 mt-5 shadow p-5 rounded-3"
      >
        <h3 className=" border-bottom border-secondary mb-3">Edit & Update Post</h3>
        <label htmlFor="title">Title</label>
        <input
          type=" text"
          className=" form-control"
          required
          value={editTitle}
          placeholder="Enter Title..."
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="desc" className=" mt-4">
          Description
        </label>
        <textarea
          type=" text"
          className=" form-control"
          required
          value={editDes}
          placeholder='Enter Description...'
          onChange={(e) => setEditDes(e.target.value)}
        />

       <div className=" col-5 offset-7 mt-4 row">
       <botton
          type="button"
          onClick={() => history(`/post/${post[0].id}`)}
          className=" btn btn-secondary col-5 me-3"
        >
          Back
        </botton>

       <botton
          type="button"
          onClick={handleEdit}
          className=" btn btn-primary col-5"
        >
          Save
        </botton>
        
       </div>
      </form>
    </>
  );
};

export default EditPost;
