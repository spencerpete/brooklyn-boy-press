import { Link } from 'react-router-dom';

export default function ReviewList(props) {
  const { postList } = props;
  const reviews = postList.filter(post => post.post_type === 'review');
  return (
    <div className="mt-16">
      <h2 className="md:text-7xl text-2xl border-b-4 w-7/12 sm:w-11/12 m-auto">Reviews</h2>
      {reviews.map(review => (
        <Link
          key={review.id}
          className="md:w-6/12 sm:w-11/12 flex m-auto shadow-lg my-6"
          to={`/reviews/${review.id}`}
        >
          <div className="lg:w-2/12  md:w-3/12 w-4/12 p-4">
            <img className="max-w-full h-auto" src={review.thumbnail_url} alt={review.title} />
          </div>
          <div className="p-4">
            <div>{review.title}</div>
            <div className="opacity-50 my-2 text-left">by - {review.author}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
