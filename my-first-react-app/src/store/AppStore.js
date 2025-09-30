import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter(Toolkit)/Counter";
import Profile from "./features/profile/Profile";
import Theme from "./features/theme/Theme";
import ToDo from "./features/todo/ToDo";
import ProductsList from "./features/product/ProductsList";

export default function AppStore() {
  return (
    <Provider store={store}>
      {/*<Counter />*/}
      {/*<Profile />*/}
      {/*<Theme />*/}
      {/*<ToDo />*/}
      <ProductsList />
    </Provider>
  )
}
