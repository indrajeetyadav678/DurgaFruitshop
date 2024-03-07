import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Product";
import Cardbag from "./Component/Cardbag";
import Contact from "./Component/Contact";
import Paymentpage from "./Component/Paymentpage";
import PaymentDone from "./Component/PaymentDone";





const App=()=>{

    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="shop" element={<Cardbag />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="shopbag" element={<Cardbag/>} />
            <Route path="odernow" element={<Paymentpage/>} />
            <Route path="PaymentDone" element={<PaymentDone />} />
            <Route path="Paymentpage" element={<Paymentpage />} />
            
        </Route>
    </Routes>
    </BrowserRouter>
    
    </>
    );

}
export default App;