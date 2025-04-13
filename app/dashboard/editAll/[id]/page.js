import EditAllsForm from "@/components/EditAllsForm";

const getAllsById = async (id) => {
    try {
        const baseUrl ='https://alex-follow.vercel.app';  // Fallback for local dev
        const res = await fetch(`${baseUrl}/api/alls/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch main");
        }

        const data = await res.json();
        return { all: data.alls };  // Adjust based on your API response
    } catch (error) {
        console.error(error);
        return { all: null };
    }
};


export default async function EditAlls({ params }) {
    const id = params?.id;
    if (!id) {
        return <div>ID is not provided</div>;
    }

    // Fetch the main data using the id
    const { all } = await getAllsById(id);

    if (!all) {
        return <div>All not found</div>;
         // Handle the case where main is not found
    }

    const { tit, summ, start, tash, startDate, startDateout, place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3, respo4, from1, from2, from3, from4, datos1, datos2, datos3, datos4, statuz, comment , refer } = all;

    return (
        <EditAllsForm
            id={id}
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