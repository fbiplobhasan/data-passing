import MySelf from "../mySelf/mySelf";
import Brother from  "../Brother/Brother";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>

                
            </section>
        </div>
    );
};

export default Dad;