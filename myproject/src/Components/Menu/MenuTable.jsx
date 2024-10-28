
import MenuRows from "./MenuRows";
import { useQuery } from "@tanstack/react-query"
import { getClothes } from "../Supabase/apiCloth";
import CartOverview from "../Cart/CartOverview";
const MenuTable = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["clothes"],
        queryFn: getClothes
    })
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No clothes available</div>;

    }



    return (
        <div className="overflow-x-auto">
            <table className="table-auto min-w-full bg-white border border-gray-300 ">
                <thead className="flex">
                    <tr className="flex gap-32 w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal"  >
                        <th ></th>
                        <th className="py-3 px-6 text-left">Stuff</th>
                        <th className="py-3 px-6 text-left">Description</th>
                        <th className="py-3 px-6 text-left">Quantity Available</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left"></th>
                    </tr>
                </thead>
                <tbody >

                    {data.map((clothe) => { return <MenuRows clothe={clothe} key={clothe.id} />; })}
                </tbody>
            </table>
            <CartOverview />
        </div>
    )
}

export default MenuTable