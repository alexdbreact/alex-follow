import EditMainsForm from "@/components/EditMainsForm";

const getMainsById = async (id) => {
    try {
        const baseUrl ='https://alex-follow.vercel.app';  // Fallback for local dev
        const res = await fetch(`${baseUrl}/api/mains/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch main");
        }

        const data = await res.json();
        return { main: data.mains };  // Adjust based on your API response
    } catch (error) {
        console.error(error);
        return { main: null };
    }
};


export default async function EditMains({ params }) {
    const id = params?.id;
    if (!id) {
        return <div>ID is not provided</div>;
    }

    // Fetch the main data using the id
    const { main } = await getMainsById(id);

    if (!main) {
        return <div>Main not found</div>;
         // Handle the case where main is not found
    }

    const { records,tit, summ, start, tash, startDate, startDateout,importance, place, place2, place3 , place4 ,place5,place6,place7, place8,place9,place10,place11,place12,place13,place14,place15,place16,place17,place18,place19,place20,place21,place22,place23,place25,place26,place27,place28,place29,place30,respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer } = main;

    return (
        <EditMainsForm
            id={id}
            tit = {tit}
            summ = {summ}
            tash = {tash}
            respo1={respo1}
            respo2={respo2}
            respo3={respo3}
            respo4={respo4}
            from1={from1}
            from2={from2}
            from3={from3}
            from4={from4}
            datos1={datos1}
            datos2={datos2}
            datos3={datos3}
            datos4={datos4}
            statuz={statuz}
            comment={comment}
        />
    );
}