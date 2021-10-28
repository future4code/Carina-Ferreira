import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const PostPage = () => {
  useProtectedPage()
  // const params = useParams();

  // const posts = useRequestData([], `${BASE_URL}/posts/${params.id}`)
  // console.log(posts)

  return (
    <div>
        Oi! Eu sou os detalhes do post!
    </div>
  );
}

export default PostPage;
