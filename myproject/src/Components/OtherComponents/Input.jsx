// import { useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUsername } from "../User/UserSlice"
import { useNavigate } from "react-router-dom"

const Input = () => {
    const [username, setusername] = useState("")
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(setUsername(username))
        Navigate("/menu")
    }
    const name = useSelector((store) => store.UserData.username)
    if (name) return <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-[26px] p-8">The Best Clothes.
            Straight out of the oven, <br /> straight to you.</h1>
        <Link to="menu" className="bg-yellow-600 font-semibold text-lg p-5 m-11 rounded-lg">Continue Ordering , {name}</Link></div>
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-semibold text-[26px] p-8">The Best Clothes.
                Straight out of the oven, <br /> straight to you.</h1>
            <form onSubmit={handlesubmit} className="flex flex-col justify-center items-center text-center" >
                <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} className="border border-slate-400  rounded-lg p-1 w-80" placeholder="Enter Your Text" />
                {username && <button>Start Ordering</button>}
            </form>
        </div>
    )
}

export default Input