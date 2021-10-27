import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const PostPage = () => {
  useProtectedPage()
  return (
    <div>
        Oi! Eu sou os detalhes do post!
    </div>
  );
}

export default PostPage;
