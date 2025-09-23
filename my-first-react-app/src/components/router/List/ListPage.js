import {Link} from "react-router-dom";

export default function ListPage({ list }) {
  return (
    <ul>
      {list.map(el =>
        <li key={el.id}>
          <Link to={`/${el.id}`}>{el.title} {el.id}</Link>
        </li>)}
    </ul>
  )
}
