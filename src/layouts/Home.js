import '../App.css';
import React from "react";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoading = useStoreState((state) => state.isLoading);
  const searchResult = useStoreState((state) => state.searchResult);

  return (
    <main
      className=" col-8 offset-2 mt-2 overflow-y-scroll Home"
      style={{ height: 450, WebkitScrollSnapType: "none" }}
    >
      <ul className=" list-group ">
        {isLoading && <li className=" text-center mt-5 fs-4">Loading...</li>}
        {!isLoading &&
          searchResult &&
          searchResult.map((post) => (
            <Link to={`/post/${post.id}`} className=" text-decoration-none">
              <li key={post.id} className=" list-group-item p-5 mb-3 shadow">
                <h4 className="">{post.title}</h4>
                {post.description.length <= 25 && <p>{post.description}</p>}
                {post.description.length > 25 && (
                  <p>{post.description.slice(0, 25)}...</p>
                )}
              </li>
            </Link>
          ))}
        {!isLoading && !searchResult.length && (
          <li className=" text-danger text-center mt-5 fs-4">No Post Found</li>
        )}
      </ul>
    </main>
  );
};

export default Home;
