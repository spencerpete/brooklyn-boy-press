import React from 'react';
import FeaturedContentHolder from '../components/FeaturedContentHolder';

export default function Homepage(props) {
  const { posts } = props;
  return (
    <div className="m-auto mt-16 flex-col space between">
      <h1 className="text-9xl">brooklyn boy press</h1>
      <FeaturedContentHolder posts={posts} />
    </div>
  );
}
