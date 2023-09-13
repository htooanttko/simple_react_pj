import React from 'react'
import { useStoreState, useStoreActions } from "easy-peasy";

const Footer = () => {
  const posts = useStoreState((state) => state.posts);

  return (
    <footer className=' position-absolute bottom-0 bg-primary col-8 offset-2 rounded-top-3 text-center'>
      {posts.length == 0 && <h5 className=' m-2 text-white pt-2'>No Post Found</h5>}
      {posts.length == 1 && <h5 className=' m-2 text-white pt-2'>{posts.length} Post</h5>}
      {posts.length != 0 && posts.length != 1 && <h5 className=' m-2 text-white pt-2'>{posts.length} Posts</h5>}
    </footer>
  )
}

export default Footer