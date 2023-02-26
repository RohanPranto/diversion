import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//


import Home from "./components/Home/Home";
// import CustomerSignUp from "./components/CustomerSignUp/CustomerSignUp";
import CustomerSignin from "./components/CustomerSignin/CustomerSignin";
import PEMSignin from "./components/PEMSignin/PEMSignin";
import SearchPEM from "./components/SearchPEM/SearchPEM";
import UpdatePEM from "./components/UpdatePEM/UpdatePEM";
import ShopSignin from "./components/ShopSignin/ShopSignin";
import ShopJoin from "./components/ShopJoin/ShopJoin";
import WorkerJoin from "./components/WorkerJoin/WorkerJoin";
// import PEMs from "./components/PEMs/PEMs";
import Pshops from "./components/Pshops/Pshops";
import Gardeners from "./components/Gardeners/Gardeners";
import Mshops from "./components/Mshops/Mshops";
import Eshops from "./components/Eshops/Eshops";
import HouseHelps from "./components/HouseHelps/Househelps";
import Payment from "./components/Home/Payment/Payment";
import UpdateShop from "./components/UpdateShop/UpdateShop";
import WorkerSignin from "./components/WorkerSignin/WorkerSignin";
import { getCustomer } from "./actions/customer";
import { getPEM } from "./actions/pem";
import { useDispatch } from "react-redux";
import { getShop } from "./actions/shop";
import AdminSignUp from "./components/Admin/AdminSignUp";
import { getAdmin } from "./actions/admin";
import Users from "./components/Admin/Users";
import Pems from "./components/Admin/Pems";
import Shops from "./components/Admin/Shops";
import Appliancerepairs from "./components/Appliancerepairs/Appliancerepairs";
import Carpenters from "./components/Carpenters/Carpenters";
import Homepaintings from "./components/Homepaintings/Homepaintings";
export default function App() {
  const dispatch = useDispatch();
  dispatch(getCustomer());
  dispatch(getPEM());
  dispatch(getShop());
  dispatch(getAdmin());

  return (
    <Router>
      <div>
     <div className="App">
    </div>
        <Routes>
          <Route path="/" exact element={<CustomerSignin/>} />
          <Route path="/CustomerSignin" exact element={<Home />} />
          <Route path="/Eshops" exact element={<Eshops />} />
          <Route path="/Mshops" exact element={<Mshops />} />
          <Route path="/Gardeners" exact element={<Gardeners />} />
          <Route path="/Pshops" exact element={<Pshops />} />
          <Route path="/Payment" exact element={<Payment />} />
          <Route path="/ShopJoin" exact element={<ShopJoin />} />
          <Route path="/WorkerJoin" exact element={<WorkerJoin />} />
          <Route path="/PEMSignin" exact element={<PEMSignin />} />
          <Route path="/SearchPEM" exact element={<SearchPEM />} />
          <Route path="/UpdatePEM" exact element={<UpdatePEM />} />
          <Route path="/ShopSignin" exact element={<ShopSignin />} />
          <Route path="/HouseHelps" exact element={<HouseHelps />} />
          <Route path="/UpdateShop" exact element={<UpdateShop />} />
          <Route path="/WorkerSignin" exact element={<WorkerSignin />} />
          <Route path="/Admin" exact element={<AdminSignUp />} />
          <Route path="/Users" exact element={<Users />} />
          <Route path="/Pems" exact element={<Pems />} />
          <Route path="/Shops" exact element={<Shops />} />
          <Route path="/Appliancerepairs" exact element={<Appliancerepairs />} />
          <Route path="/Carpenters" exact element={<Carpenters />} />
          <Route path="/Homepaintings" exact element={<Homepaintings />} />
        </Routes>
      </div>
    </Router>
    
  );
}