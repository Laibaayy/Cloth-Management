import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAddress } from "../User/UserSlice";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
    // const isValidPhone = (str) =>
    //     /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    //         str
    //     );
    const [name, setName] = useState(useSelector((store) => store.UserData.username));

    const submithandle = (e) => {
        e.preventDefault()
    }
    const dispatch = useDispatch()
    const { status: addressStatus, position, address, error: errorAddress } = useSelector(store => store.UserData)
    const isLoadingAddress = addressStatus === "loading"

    return (

        <form action="" className="mt-5" onSubmit={submithandle}>
            <label className="block font-semibold " htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' className="border mt-1 mb-1 border-gray-600 w-full p-2 font-medium rounded-full" value={name} onChange={(e) => setName(e.target.value)} required />
            <label className="block font-semibold" htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your Email' className="border mt-1 mb-1 border-gray-600 w-full p-2 font-medium rounded-full" required />
            <label className="block font-semibold" htmlFor="">Phone no</label>
            <input type="number" placeholder='xxxxxxxxxxx' className="border mt-1 mb-1 border-gray-600 w-full p-2 font-medium rounded-full" required />
            <label className="block font-semibold" htmlFor="">Your Address</label>
            <input type="text" className="border border-gray-600 w-full p-2  mt-1 mb-1 font-medium rounded-full" required disabled={isLoadingAddress} defaultValue={address} />
            {!position.latitude && !position.longitude && (<button disabled={isLoadingAddress} onClick={(e) => { e.preventDefault(); dispatch(fetchAddress()) }} >Geolocation</button>)}
            {addressStatus === "error" && <p className="mt-2 bg-red-100 rounded-md p-2 text-red-700">{errorAddress}</p>}

            <Link to="/OrderOverview">
                <button>PLace Order</button>
            </Link>

        </form>
    )
}

export default PlaceOrder