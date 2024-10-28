import { useDispatch, useSelector } from "react-redux"
import { formatCurrency } from "../Hooks/Helper";
import { clearCart, DeleteItem } from "./CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartt = useSelector((store) => store.CartData)
    // const id = useSelector((store) => store.CartData.id)

    const dispatch = useDispatch()
    const name = useSelector((store) => store.UserData.username)

    const clearhandle = () => {
        dispatch(clearCart(cartt.cart.id))
    }
    const deletehandle = (id) => {
        dispatch(DeleteItem(id))
        console.log(id);

    }

    if (!cartt.cart.length) return <p>Cart is empty</p>

    return (

        <>
            <h1>Your Order {name}</h1>
            <div className='flex flex-col mr-20 '>

                {cartt.cart.map(item => (
                    <div key={item.id} className=' mt-3 mb-2'>
                        <div className="border-b-2 flex flex-row  justify-between items-center gap-9 mb-1" >
                            <img className='w-20 h-20' src={item.image} alt={item.stuff} />
                            <span>{item.stuff}</span>
                            <span className='text-center w-96'>{item.Description}</span>
                            <span>{item.quantity}</span>
                            <span>{formatCurrency(item.Price * item.quantity)}</span>
                            <div>
                                <button onClick={() => deletehandle(item.id)} className="bg-red-700 text-white p-1 rounded-full w-20 mr-2">Delete</button>

                            </div>
                        </div>
                    </div>
                ))}

            </div >
            <button onClick={clearhandle} className="bg-white text-black border-black border p-1 rounded-full w-20">Clear Cart</button>
            <Link to="order">
                <button className="bg-green-700 text-white p-1 rounded-full w-28 ml-2 mr-2">Order Now</button>
            </Link>
        </>
    )
}

export default Cart