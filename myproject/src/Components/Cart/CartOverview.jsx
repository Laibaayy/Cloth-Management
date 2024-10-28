import { useSelector } from "react-redux";
import { formatCurrency } from "../Hooks/Helper";
import { Link } from "react-router-dom";


const CartOverview = () => {
    const cartItemsOverviewQuantity = useSelector((state) =>
        state.CartData.cart.reduce((sum, item) => sum + item.quantity, 0)
    );

    const cartItemsOverviewPrices = useSelector((state) =>
        state.CartData.cart.reduce((sum, item) => sum + item.Price * item.quantity, 0)
    );

    if (cartItemsOverviewQuantity === 0) return (
        <div className="bg-stone-800 uppercase p-4 fixed w-full bottom-0  " >
            <div className="text-stone-200 flex justify-between items-center">
                <p className="font-semibold space-x-4">
                    <span>0</span>
                    <span>Cart is empty</span>
                </p>
                <Link to="cart">Open cart &rarr;</Link>

            </div>
        </div>
    );

    return (
        <div className="bg-stone-800 uppercase p-4 fixed w-full bottom-0 " >
            <div className="text-stone-200 flex justify-between items-center">
                <p className="font-semibold space-x-4">
                    <span>{cartItemsOverviewQuantity}</span>
                    <span>{formatCurrency(cartItemsOverviewPrices)}</span>
                </p>
                <Link to="cart">Open cart &rarr;</Link>

            </div>
        </div>
    );
}

export default CartOverview



