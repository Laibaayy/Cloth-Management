import { useSelector } from "react-redux"

const Username = () => {
    const name = useSelector((store) => store.UserData.username)
    if (!name) return;
    return (
        <div className="font-semibold text-white">{name}</div>
    )
}

export default Username