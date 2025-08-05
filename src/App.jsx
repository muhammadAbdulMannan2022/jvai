import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* all route starts here */}
    </>
  );
}

export default App;
