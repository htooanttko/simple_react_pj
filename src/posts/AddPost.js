import React from "react";
import { useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const AddPost = () => {
  const history = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const addTitle = useStoreState((state) => state.addTitle);
  const setAddTitle = useStoreActions((actions) => actions.setAddTitle);

  const addDes = useStoreState((state) => state.addDes);
  const setAddDes = useStoreActions((actions) => actions.setAddDes);

  const savePost = useStoreActions((actions) => actions.savePost);

  const handleAdd = async () => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: addTitle, description: addDes };
    savePost(newPost);
    history("/");
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" col-4 offset-4 mt-5 shadow p-5 rounded-3"
      >
        <h3 className=" border-bottom border-secondary mb-3">New Post</h3>
        <label htmlFor="title">Title</label>
        <input
          type=" text"
          className=" form-control"
          required
          placeholder="Enter Title..."
          onChange={(e) => setAddTitle(e.target.value)}
        />
        <label htmlFor="desc" className=" mt-4">
          Description
        </label>
        <textarea
          type=" text"
          className=" form-control"
          required
          placeholder="Enter Description..."
          onChange={(e) => setAddDes(e.target.value)}
        />

        <botton
          type="button"
          onClick={handleAdd}
          className=" btn btn-primary mt-4 col-3 offset-9"
        >
          + Add
        </botton>
      </form>
    </>
  );
};

export default AddPost;
