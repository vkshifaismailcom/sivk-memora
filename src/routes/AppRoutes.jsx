import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsDetails from "../pages/ProductDetails";
function AppRoutes(){
  return(
      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/products" elements={<Products/>} />
<Route path="products/:id" element={<ProductsDetails />}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

    </Routes>
  )
}
export default AppRoutes;