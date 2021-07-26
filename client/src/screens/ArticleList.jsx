import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleList(props) {
  const { postList } = props;
  const articles = postList.filter(post => post.post_type === 'article');
  return (
    <div>
      {articles.map(article => (
        <Link to={`/articles/${article.id}`}>
          <div key={article.id}>
            <div>{article.title}</div>
            <div>by - {article.author}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
