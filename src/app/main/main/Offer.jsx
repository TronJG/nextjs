import Offers from "./OfferButton/Offers";

export default function Offer(){
    return(
        <div className="p-10">
            <div className="text-3xl font-bold" >
                <p>Offers</p>
            </div>
            <div className="pt-6">
                <Offers/>
            </div>
        </div>
    )
}