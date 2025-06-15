import './CommentsList.css';
import Button from '../UI/button/Button'
const {useState} = require("react");

function Comment(props) {
  return (
    <div className={"comment"}>
      <p><span>{props.comment.id}.</span> {props.comment.text}</p>
      <Button onClick={() => props.remove(props.comment)} text="Удалить" />
    </div>
  )
}

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const removeComment = (comment) => {
    setComments(comments.filter(c => c.id !== comment.id))
  }

  return (
    <div>
      {comments.map(comment => <Comment remove={removeComment} comment={comment} key={comment.id} />)}
    </div>
  )
}

export default CommentsList;
