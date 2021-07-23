import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/post';

export default function ArticlePage(props) {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { comments, currentUser } = props;

  useEffect(() => {
    const fetchPost = async id => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost(id);
  }, []);

  const articleComment = comments.filter(comment => comment.post_id === Number(id));
  console.log(currentUser);
  return (
    <div>
      <h2>{post?.title}</h2>
      <h4>{post?.author}</h4>
      <p>{post?.content}</p>
      <h3>comments</h3>
      <div>add a comment?</div>
      {articleComment.map(comment => (
        <div>
          <p>{comment?.user.username}</p>
          <p>{comment?.content}</p>
          <div>reply</div>
          {currentUser?.id === comment?.user.id ? (
            <div>
              <div>edit</div>
              <div>delete</div>
            </div>
          ) : (
            ''
          )}
          <div>
            {comment?.subcomments.map(comment => (
              <div>
                {comment.content}
                <div>reply</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
