import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Applayout from "./Components/Pages/Applayout";
import Input from "./Components/OtherComponents/Input";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MenuTable from "./Components/Menu/MenuTable";
import Cart from "./Components/Cart/Cart"
import PlaceOrder from "./Components/Order/PlaceOrder";
import OrderOverview from "./Components/Order/OrderOverview";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})
const App = () => {
  return (
    <QueryClientProvider client={queryclient} >
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Input />} />
            <Route path="menu" element={<MenuTable />} />
            <Route path="menu/cart" element={<Cart />} />
            <Route path="menu/cart/order" element={<PlaceOrder />} />
            <Route path="/OrderOverview" element={<OrderOverview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

