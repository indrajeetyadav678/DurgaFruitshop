import { Link, Outlet } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";

// const showdropmanu=()=>{
//     document.getElementById('prodropmanu').Style.display="block";
// }
const Layout = () => {
    const mycard = useSelector((state) => state.Addtocard.card);
    const quantval = mycard.length
    
    return (
        <>
            <body id="body">
                {/* <input type="checkbox" id="droplist"/> */}
                <section id="header">
                    <div id="header_top">
                        <div id="header_top_left">
                            <FaLocationDot />
                            <Link to="address" className="address">Cybrom Technologies Pvt.Ltd</Link>
                            <MdMarkEmailUnread />
                            <Link to="Email" className="email">Cybrom123@gmail.com</Link>
                        </div>
                        <div id="header_top_right">
                            <Link to="privacy" className="privacy">Privacy Policy</Link>/
                            <Link to="terms" className="terms">Terms of Use</Link>/
                            <Link to="refund" className="refund">Sales and Refunds</Link>
                        </div>
                    </div>

                    <div id="header_Bottom">
                        <div id="header_Bottom_left">DurgaFruitsShop</div>

                        <ul id="header_Bottom_center">
                            <li><Link to="home" className="homebtn">Home</Link></li>
                            <li><Link to="about" className="aboutbtn">About</Link></li>
                            <li id="product_dropdown"><Link to="product" className="productbtn">Product</Link>&nbsp;&nbsp;<label for="droplist"><IoIosArrowDown  id="downarrow"/></label>
                            </li>
                            <li><Link to="shop" className="shopbtn">shop</Link></li>
                            <li><Link to="contact" className="contactbtn">contact</Link></li>
                        </ul>

                        <ul id="header_Bottom_right">
                            <li id="search-circle"><Link to="search" className="searchbtn"><CiSearch className="headsearchicon" /></Link></li>
                            <li id="headshopbag">
                                <div id="headnotify">{quantval}</div>
                                <Link to="shopbag" className="shopbagbtn">
                                    <FaBagShopping className="headshopbagicon" />
                                </Link>
                            </li>
                            <li><Link to="profile" className="profileicon"><FaUser className="headusericon" /></Link></li>
                        </ul>
                    </div>
                    <ul id="prodropmanu">
                        <li><Link to="#" className="btn1">Link1</Link></li>
                        <li><Link to="#" className="btn1">Link2</Link></li>
                        <li><Link to="#" className="btn1">Link3</Link></li>
                    </ul>
                </section>
                <Outlet  id="outlet"/>
                <Footer />

            </body>
        </>
    );
}
export default Layout;