import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

export default function DetailPage({ list }) {
  const { id } = useParams();
  const elementList = list[id - 1];

  if (!elementList) return <h2>Нет статьи</h2>

  return (
    <>
      <h2>{elementList.title} {elementList.id}</h2>
      <p>{elementList.text}</p>
      <Link to={"/"}>Назад</Link>
    </>
  )
}
