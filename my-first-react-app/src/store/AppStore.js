import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter(Toolkit)/Counter";
import Profile from "./features/profile/Profile";

export default function AppStore() {
  return (
    <Provider store={store}>
      {/*<Counter />*/}
      <Profile />
    </Provider>
  )
}
