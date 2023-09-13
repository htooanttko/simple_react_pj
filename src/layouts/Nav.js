import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import api from "../api/posts";

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const setIsLoading = useStoreActions((actions) => actions.setIsLoading);

  const searchPost = useStoreState((state) => state.searchPost);
  const setSearchPost = useStoreActions((actions) => actions.setSearchPost);

  const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

  useEffect(()=> {
        const fetchPosts = async () => {
            try {
             const res = await api.get('/posts');
                setPosts(res.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchPosts();
    },[searchPost])


  useEffect(() => {
    const filterResult = posts.filter((post) =>
      ((post.title).toLowerCase().includes(searchPost.toLowerCase())) ||
      ((post.description).toLowerCase().includes(searchPost.toLowerCase()))
    );

    setSearchResult(filterResult.reverse());
  }, [searchPost, posts]);

  return (
    <section className=" d-flex container  bg-dark shadow">
      <ul className=" justify-content-between d-flex col-4  pe-4  mt-3">
        <Link to="/">
          <li className=" rounded-0 btn btn-dark p-3">Home</li>
        </Link>

        <Link to="/About">
          <li className=" rounded-0 btn btn-dark p-3">About</li>
        </Link>

        <Link to="/post/add">
          <li className=" rounded-0 btn btn-dark p-3 pe-3">+ Add Post</li>
        </Link>
      </ul>
 
      <form className=" offset-5 col-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          value={searchPost}
          onChange={(e) => setSearchPost(e.target.value)}
          className=" form-control mt-4 "
        />
      </form>
    </section>
  );
};

export default Nav;
