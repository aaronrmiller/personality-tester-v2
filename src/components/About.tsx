import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {}

export const About: React.FC<IProps> = () => {
  const postId = 5;
  return (
    <>
      <div>About</div>
      <Link to={`/posts/${postId}`}> go to post 1 </Link>
    </>
  );
};
