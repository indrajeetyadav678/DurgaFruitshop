import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { increment,decrement,delet } from "../Controls/AddcardSlice";
let NetAmount = 0
const Cardbag = () => {
    const mycard = useSelector((state) => state.Addtocard.card);
    const dispatch = useDispatch();
    console.log(mycard)
    // for(var i=0; i<mycard.length;++i){
    //     NetAmount+=mycard[i].price*mycard[i].Quantity
    // }

    let increase = (myid) => {
        dispatch(increment(myid))
        NetAmount = 0
    }
    let decrease = (myid) => {
        dispatch(decrement(myid))
        NetAmount = 0
    }
    const remove = (myid) => {
        dispatch(delet(myid))
        NetAmount = 0
    }


    const ans = mycard.map((key) => {
         NetAmount = NetAmount+ (key.price) * (key.Quantity)
        return (
            <>
                <tr>
                    <td id="tdimage"><img src={key.image} alt="" /></td>
                    <td>{key.product_name}</td>
                    <td id="tddetails">{key.product_details}</td>
                    <td >{key.price}&nbsp;&nbsp;Per KG</td>
                    <td id="tdQuantity">
                        <button onClick={() => increase(key.id)}>+</button>&nbsp;&nbsp;
                        <span>{key.Quantity}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => decrease(key.id)}>-</button>
                    </td>
                    <td id="tdtotalprice">{key.price * key.Quantity}</td>
                    <td id="tddelete" onClick={() => { remove(key.id) }}><MdDelete /></td>
                </tr>
            </>
        );

    })

    return (
        <>
            <body id="body">
                <h1>Product in cart added</h1>
                <table id="cardbagtable">
                    <tr>
                        <th></th>
                        <th>Product name</th>
                        <th>Product description</th>
                        <th>Rate price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Delete</th>
                    </tr>
                    {ans}
                    <tr colspan="5" id="tdnetamount">
                        <td colspan="5">Total Pay Amount</td>
                        <td colspan="2">Rs&nbsp;&nbsp;{NetAmount}.00/-</td>
                    </tr>
                    <tr>
                        <td id="tdorderbtn" colSpan="7"><Link to="/odernow" id="button">Place Your Order Now!!</Link></td>
                    </tr>
                </table>
            </body>
        </>
    );
}
export default Cardbag;