import {useSelector} from "react-redux";
import Product from "./Product";

export default function ProductsList() {
  const products = useSelector(state => state.products.products);
  const favorites = useSelector(state => state.favorites.favorites);

  return (
    <div>
      <h2>Список товаров</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
      <h2>Список избранных товаров</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
        {
          favorites.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}
