import React from "react";
import { Card } from "../Molecules";
import { useSelector } from "react-redux";
import { selectSortedLists } from '../../selectors/selectors';

export function CardArea(){
    const { proxyList, originalList } = useSelector(selectSortedLists);
    const listView = useSelector((state) => state.listView)
    const cardList = useSelector((state) => state.cardList)
    const proxyPrice = useSelector((state) => state.proxyPrice)

    return(
        <div className="cardArea">
            <div className="row justify-content-center" style={{ maxWidth: "100vw"}}>
                {(() => {
                switch (listView) {
                    case "Proxy":
                    return (
                        <>
                        {proxyList.map((card) => (
                            <div key={card.name} className="col-lg-4 col-md-6 col-sm-12 p-0 m-0" style={{width: "250px"}}>
                            <Card name={card.name} img={card.imageURL} price={proxyPrice} qty={card.quantity} />
                            </div>
                        ))}
                        </>
                    );
                    case "Original":
                    return (
                        <>
                        {originalList.map((card) => (
                            <div key={card.name} className="col-lg-4 col-md-6 col-sm-12 p-0 m-0" style={{width: "250px"}}>
                            <Card name={card.name} img={card.imageURL} price={card.price} qty={card.quantity} />
                            </div>
                        ))}
                        </>
                    );
                    case "All":
                    return (
                        <>
                        {cardList.map((card) => (
                            <div key={card.name} className="col-lg-4 col-md-6 col-sm-12 p-0 m-0" style={{width: "250px"}}>
                            <Card name={card.name} img={card.imageURL} price={card.price} qty={card.quantity} />
                            </div>
                        ))}
                        </>
                    );
                    default:
                    return null;
                }
                })()}
            </div>
        </div>
    )
}