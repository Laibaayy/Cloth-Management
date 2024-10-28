import supabase from "./Supabase";

export async function getClothes() {
    let { data, error } = await supabase
        .from('cloth')
        .select('*');
    if (error) {
        console.error(error);
        throw new Error("Cabins cant be loaded");
    }
    return data;
}



