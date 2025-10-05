import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "./postSlice";

export default function Timer() {
  const dispatch = useDispatch();
  const { post, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPost(1))
  }, [dispatch])

  if (status === 'loading') return <p>Загрузка...</p>
  if (status === 'failed') return <p>Ошибка {error}</p>

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}
