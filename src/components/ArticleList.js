import React from "react";
import Article from "./Article"

function ArticleList ({posts}) {
return (
  <main>
{posts.map( (post) => {
return <Article key={post.id} title={post.title} data={post.data} preview={post.preview} minutes={post.minutes} />
}
)}
  </main>
)
}

export default ArticleList;