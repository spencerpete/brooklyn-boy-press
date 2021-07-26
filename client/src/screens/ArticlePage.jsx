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
    <div className="w-10/12 flex flex-col align-center m-auto">
      <img src={post?.main_img_url} alt={post?.title} />
      <h2 className="text-xl my-8">{post?.title}</h2>
      <p className="w-7/12 self-center text-left leading-loose">{post?.content}</p>
      <h4>by - {post?.author}</h4>
      <div className="flex justify-between m-auto w-6/12">
        <h3 className="text-2xl">comments</h3>
        <div onClick={toggleReply}>add a comment?</div>
        {clicked && reply}
      </div>
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
