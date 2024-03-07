import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const visa="https://themewagon.github.io/fruitables/img/payment.png";

const Footer = () => {
    return (
        <>
            <body id="footbody">
                <ul id="foottop">
                    <li id="foottopleft">
                        <div>Fruitshop</div>
                        Fresh Products
                    </li>
                    <li id="foottopmid">
                        <input type="search" value="" placeholder="Your Email" />
                        <button>Subscribe Now</button>
                    </li>
                    <li id="foottopright">
                        <ul id="foottopsocial">
                            <li><FaTwitter /></li>
                            <li><FaFacebookF /></li>
                            <li><FaYoutube /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </li>
                </ul>

                <div id="footmiddle">
                  <div id="footmiddleone">
                    <h2 style={{color:"white"}}>Why People Like us!</h2>
                    <div className="footmiddleone">
                    typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the like 
                    Aldus PageMaker including of Lorem Ipsum.
                    </div>
                    <button id="footreadmorebtn">Read More</button>
                  </div>

                  <ul id="footmiddletwo">
                  <li><h2 style={{color:"white"}}>Shop Info</h2></li>
                  <li><Link to="info" className="footmiddletwoinfo">About Us</Link></li>
                  <li><Link to="info" className="footmiddletwoinfo">Contact Us</Link></li>
                  <li><Link to="info" className="footmiddletwoinfo">Privacy Policy</Link></li>
                  <li><Link to="info" className="footmiddletwoinfo">Terms & Condition</Link></li>
                  <li><Link to="info" className="footmiddletwoinfo">Return Policy</Link></li>
                  <li><Link to="info" className="footmiddletwoinfo">FAQs & Help</Link></li>
                  </ul>

                  <ul id="footmiddlethree">
                  <li><h2 style={{color:"white"}}>Account</h2></li>
                  <li><Link to="Account" className="account">My Account</Link></li>
                  <li><Link to="Account" className="account">Shop details</Link></li>
                  <li><Link to="Account" className="account">Shopping Cart</Link></li>
                  <li><Link to="Account" className="account">Whishlist</Link></li>
                  <li><Link to="Account" className="account">Order History</Link></li>
                  <li><Link to="Account" className="account">International Orders</Link></li>
                  </ul>

                  <div id="footmiddlefour">
                  <h2 style={{color:"white"}}>Contact</h2>
                  <div id="footcontect">
                  Address: Cybrom Mp Nagar Zone-1 Bhopal<br/>
                  Email:cybrom123@gmail.com<br/>
                  Phone: +919879797987<br/>
                  Payment Accepted<br/>
                    <img src={visa} alt="" />
                  </div>
                  
                  </div>

                </div>
                <div id="footbottom">
                  <div>@ All Right Reserved</div>
                  <div>Developed by Indrajeet yadav</div>
                </div>

            </body>

        </>
    );
}
export default Footer;