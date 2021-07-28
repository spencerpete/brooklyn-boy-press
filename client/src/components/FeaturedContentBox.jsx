import React from 'react';

export default function FeaturedContentBox(props) {
  const { post } = props;
  return (
    <div className="w-11/12 m-auto flex flex-col">
      <img className="" src={post.thumbnail_url} alt={post.title} />
      <div>{post.title}</div>
    </div>
  );
}
