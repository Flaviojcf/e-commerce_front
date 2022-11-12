import { BrowserRouter } from "react-router-dom";
import { AddItemsToCartProvider } from "./context/AddItemsToCartContext";
import { AuthcontextProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AuthcontextProvider>
        <AddItemsToCartProvider>
          <Router />
          <GlobalStyle />
        </AddItemsToCartProvider>
      </AuthcontextProvider>
    </BrowserRouter>
  );
}

export default App;
