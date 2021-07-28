import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedContentBox from './FeaturedContentBox';

export default function FeaturedContentHolder(props) {
  const { posts } = props;
  const featuredList = posts.slice(0, 3);
  return (
    <div className="flex flex-col sm:flex-row m-auto mt-10">
      {featuredList.map(post => (
        <Link className="w-11/12 sm:w-1/3 mx-auto" to={`/articles/${post.id}`}>
          <FeaturedContentBox key={post.id} post={post} />
        </Link>
      ))}
    </div>
  );
}
