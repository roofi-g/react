import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter(Toolkit)/Counter";
import Profile from "./features/profile/Profile";
import Theme from "./features/theme/Theme";
import ToDo from "./features/todo/ToDo";
import ProductsList_Client from "./features/product_client/ProductsList";
import ProductCreate from "./features/product_admin/ProductCreate";
import ProductsList from "./features/product_admin/ProductsList";
import Practice from "./middleware/Practice";
import PracticeTimerThunk from "./middleware/thunc/Timer";
import PracticePostThunk from "./middleware/thunc/Post";
// import PracticeUserThunk from "./middleware/thunc/User";
import PracticeUserSaga from "./middleware/saga/User";


export default function AppStore() {
  return (
    <Provider store={store}>
      {/*<Counter />*/}
      {/*<Profile />*/}
      {/*<Theme />*/}
      {/*<ToDo />*/}
      <ProductsList_Client />
      <div>
        <ProductCreate />
        <ProductsList />
      </div>
      {/*<PracticeTimerThunk />*/}
      {/*<PracticePostThunk />*/}
      {/*<PracticeUserThunk />*/}
      {/*<PracticeUserSaga />*/}
    </Provider>
  )
}
