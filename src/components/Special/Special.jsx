import { useContext } from "react";
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({ asset }) => {
    const gift = useContext(AssetContext); // useContext দিয়ে AssetContext থেকে ভ্যালু নেয়া হয়েছে

    return (
        <div>
            <h2>Special</h2>
            <p>Has asset: {asset}</p> {/* প্রপ থেকে আসা asset */}
            <p>gift: {gift}</p> {/* Context থেকে পাওয়া gift */}
        </div>
    );
};

export default Special;
