import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <h2>my self</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;