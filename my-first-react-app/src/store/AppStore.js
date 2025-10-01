import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter(Toolkit)/Counter";
import Profile from "./features/profile/Profile";
import Theme from "./features/theme/Theme";
import ToDo from "./features/todo/ToDo";
import ProductsList_Client from "./features/product_client/ProductsList";
import ProductCreate from "./features/product_admin/ProductCreate";
import ProductsList from "./features/product_admin/ProductsList";

export default function AppStore() {
  return (
    <Provider store={store}>
      {/*<Counter />*/}
      {/*<Profile />*/}
      {/*<Theme />*/}
      {/*<ToDo />*/}
      {/*<ProductsList_Client />*/}
      <ProductCreate />
      <ProductsList />
    </Provider>
  )
}
