import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addProduct, deleteProduct} from "./favoritesSlice";

export default function Product({ product }) {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(product.id)

  function click() {
    if (!isFavorite) {
      dispatch(addProduct(product));
    } else {
      dispatch(deleteProduct(product));
    }
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Цена: {product.price} руб</p>
      <button onClick={click}>{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }</button>
    </div>
  )
}
