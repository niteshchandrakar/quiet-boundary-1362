import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initState, reducer } from "./reducers/books/reducer";
import AuthContextProvider from "./components/AuthContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>


);

if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = reducer;
}
