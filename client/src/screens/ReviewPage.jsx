import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../services/post';
import CommentSection from '../components/CommentSection';
import CommentInput from '../components/CommentInput';

export default function ReviewPage(props) {
  const [post, setPost] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { id } = useParams();
  const {
    comments,
    currentUser,
    handleCreateChild,
    handleCreateParent,
    handleDelete,
    handleUpdate,
  } = props;

  useEffect(() => {
    const fetchPost = async id => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost(id);
  }, []);

  const articleComments = comments.filter(comment => comment?.post_id === Number(id));
  const toggleReply = () => setClicked(!clicked);
  const reply = (
    <div className="w-full">
      <CommentInput
        currentUser={currentUser}
        post_id={post?.id}
        comment_id=""
        handleCreate={handleCreateParent}
        toggleReply={toggleReply}
      />
      <button onClick={toggleReply}>cancel</button>
    </div>
  );
  const addShadow = () => {
    if (window.scrollY >= 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', addShadow);
  return (
    <div
      className={`w-11/12 md:w-10/12 flex flex-col align-center m-auto ${
        scrolling ? 'border' : ''
      }`}
    >
      <img src={post?.main_img_url} alt={post?.title} />
      <h2 className="text-xl my-8">{post?.title}</h2>
      <p className="w-10/12 md:w-8/12 self-center text-left leading-loose">{post?.content}</p>
      <h4>by - {post?.author}</h4>
      <div className="flex justify-between m-auto w-full md:w-7/12">
        <h3 className="text-2xl">comments</h3>
        {currentUser ? (
          <button className={`${clicked ? 'hidden' : ''}`} onClick={toggleReply}>
            add a comment?
          </button>
        ) : (
          <Link to="/sign-up">add a comment?</Link>
        )}
        {clicked && reply}
      </div>
      <CommentSection
        articleComments={articleComments}
        id={id}
        currentUser={currentUser}
        allComments={comments}
        handleCreateChild={handleCreateChild}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        toggleReply={toggleReply}
      />
    </div>
  );
}
