import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initState, reducer } from "./reducers/books/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<BrowserRouter>
<App />
</BrowserRouter>

);

if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = reducer;
}
