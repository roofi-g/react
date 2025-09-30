export default function Product({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Цена: {product.price} руб</p>
      <button>Добавить в избранное</button>
    </div>
  )
}
