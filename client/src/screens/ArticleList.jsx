import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleList(props) {
  const { postList } = props;
  const articles = postList.filter(post => post.post_type === 'article');
  return (
    <div className="mt-16">
      <h2 className="text-7xl border-b-4 w-7/12 m-auto">Articles</h2>
      {articles.map(article => (
        <Link
          key={article.id}
          className="w-6/12 flex m-auto shadow-lg my-6"
          to={`/articles/${article.id}`}
        >
          <div className="w-2/12 p-4">
            <img src={article.thumbnail_url} alt={article.title} />
          </div>
          <div className="p-4">
            <div>{article.title}</div>
            <div className="opacity-50 my-2 text-left">by - {article.author}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
