
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa6";
import Product from "../StaticDatabase/HomeData";
import { useSelector, useDispatch } from "react-redux";
import { AddData } from "../Controls/AddcardSlice";


const Home = () => {
    const mycard = useSelector((state) => state.Addtocard.card);
    const dispatch = useDispatch();

    const myaddData = (image, product_name, product_details, price, id,quantity) => {
        let prudobj = { image: image, product_name: product_name, product_details: product_details, price: price, id: id,Quantity:quantity };
        dispatch(AddData(prudobj));

    }
    const ansprod = Product.map((key) => {
        return (
            <>
                <div id="product_wrapper">
                    <div id="image">
                        <img src={key.image} alt="" />
                    </div>
                    <h2 id="pname">{key.product_name}</h2>
                    <div id="pdetails">
                        {key.product_details}
                    </div>
                    <div id="price"><FaRupeeSign />&nbsp;{key.price}&nbsp;per KG/-</div>
                    <button id="cardbtn" onClick={() => { myaddData(key.image, key.product_name, key.product_details, key.price, key.id, 1) }}><FaBagShopping />&nbsp;&nbsp;Add to Card</button>
                </div>
            </>
        );
    })

    return (
        <>
            <body id="homebody">
                <section id="Homehero">
                    <div id="homehero_left">
                        <div id="one">100% Organic Foods</div>
                        <div id="two">Organic Veggies & Fruits Foods</div>
                        <div id="homesearch">
                            <input type="search" value="" placeholder="Search" />
                            <button>Submit Now</button>
                        </div>
                    </div>
                    <div id="homewrapper">
                        <button id="leftsift"><FaChevronLeft /></button>
                        <div id="homeslider">
                            <img src="" alt="1" />
                            <img src="" alt="2" />
                            <img src="" alt="3" />
                            <img src="" alt="4" />
                            <img src="" alt="5" />
                        </div>
                        <button id="rightsift"><FaChevronRight /></button>
                    </div>
                </section>
                <section id="homesection-2">
                    <div id="one">
                        <div id="iconcircle">
                            <FaCarSide />
                        </div>
                        <h2>Free Shipping</h2><br />
                        Free on order over Rs 10000.00/-
                    </div>
                    <div id="two">
                        <div id="iconcircle">
                            <FaUserShield />
                        </div>
                        <h2 >Security Payment</h2><br />
                        100% security payment
                    </div>
                    <div id="three">
                        <div id="iconcircle">
                            <LuArrowRightLeft />
                        </div>
                        <h2>12 Hours Return</h2><br />
                        1 day money guarantee
                    </div>
                    <div id="four">
                        <div id="iconcircle">
                            <IoCall />
                        </div>
                        <h2>24/7 Support</h2><br />
                        Support every time fast
                    </div>
                </section>
                <section id="homesection-3">
                    <div id="title">Our Organic Products</div>
                    <section id="homesection-3_product">
                        {ansprod}
                    </section>

                </section>
            </body>
        </>
    );
}
export default Home;