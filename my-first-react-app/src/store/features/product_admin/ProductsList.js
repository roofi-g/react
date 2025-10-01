import {useSelector} from "react-redux";
import Product from "../product_admin/Product";

export default function ProductsList() {
  const products = useSelector(state => state.productsList.products);

  return (
    <div>
      <h2>Список товаров</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
        {products.map(product => <Product key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
