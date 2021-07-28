import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleList(props) {
  const { postList } = props;
  const articles = postList.filter(post => post.post_type === 'article');
  return (
    <div className="mt-16">
      <h2 className="md:text-7xl border-b-4 md:w-8/12 w-11/12 text-3xl m-auto">Articles</h2>
      {articles.map(article => (
        <Link
          key={article.id}
          className="md:w-6/12 sm:w-11/12 flex m-auto shadow-lg my-6"
          to={`/articles/${article.id}`}
        >
          <div className="lg:w-2/12  md:w-3/12 w-4/12 p-4">
            <img className="max-w-full h-auto" src={article.thumbnail_url} alt={article.title} />
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
