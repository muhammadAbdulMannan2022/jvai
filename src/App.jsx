import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router/router";

function App() {
  return (
    <>
      {/* all route starts here */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
