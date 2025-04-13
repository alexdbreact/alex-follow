import EditVipsForm from "@/components/EditVipsForm";

const getVipsById = async (id) => {
    try {
        const baseUrl ='https://alex-follow.vercel.app';  // Fallback for local dev
        const res = await fetch(`${baseUrl}/api/vips/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch vip");
        }

        const data = await res.json();
        return { vip: data.vips };  // Adjust based on your API response
    } catch (error) {
        console.error(error);
        return { vip: null };
    }
};


export default async function EditVips({ params }) {
    const id = params?.id;
    if (!id) {
        return <div>ID is not provided</div>;
    }

    // Fetch the vip data using the id
    const { vip } = await getVipsById(id);

    if (!vip) {
        return <div>Vip not found</div>;
         // Handle the case where vip is not found
    }

    const {   tit, summ,  tash,respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment } = vip;

    return (
        <EditVipsForm
            id={id}
            tit = {tit}
            summ = {summ}
            tash = {tash}
            respo1={respo1}
            respo2={respo2}
            respo3={respo3}
            respo4={respo4}
            respo5={respo5}
            respo6={respo6}
            respo7={respo7}
            respo8={respo8}
            respo9={respo9}
            respo10={respo10}
           
            from1={from1}
            from2={from2}
            from3={from3}
            from4={from4}
            from5={from5}
            from6={from6}
            from7={from7}
            from8={from8}
            from9={from9}
            from10={from10}
           
            datos1={datos1}
            datos2={datos2}
            datos3={datos3}
            datos4={datos4}
            datos5={datos5}
            datos6={datos6}
            datos7={datos7}
            datos8={datos8}
            datos9={datos9}
            datos10={datos10}
            
            statuz={statuz}
            comment={comment}
        />
    );
}