import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/post';
import CommentSection from '../components/CommentSection';
import CommentInput from '../components/CommentInput';

export default function ArticlePage(props) {
  const [post, setPost] = useState(null);
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const { comments, currentUser, handleCreateChild, handleCreateParent, handleDelete } = props;

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
    <div>
      <CommentInput
        currentUser={currentUser}
        post_id={post?.id}
        comment_id=""
        handleCreate={handleCreateParent}
      />
      <button onClick={toggleReply}>cancel</button>
    </div>
  );
  return (
    <div>
      <h2>{post?.title}</h2>
      <h4>{post?.author}</h4>
      <p>{post?.content}</p>
      <h3>comments</h3>
      <div onClick={toggleReply}>add a comment?</div>
      {clicked && reply}
      <CommentSection
        articleComments={articleComments}
        id={id}
        currentUser={currentUser}
        allComments={comments}
        handleCreateChild={handleCreateChild}
        handleDelete={handleDelete}
      />
    </div>
  );
}
