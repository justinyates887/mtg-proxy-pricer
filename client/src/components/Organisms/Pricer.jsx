import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCardListSubmit from '../../hooks/useCardListSubmit';
import { Card, Navbar } from '../Molecules';
import { setListView, setProxyPrice } from '../../actions/actions';
import { selectSortedLists } from '../../selectors/selectors';

export function Pricer(){
    const { proxyList, originalList } = useSelector(selectSortedLists);

    const [isCopied, setIsCopied] = useState(false);

    const handleListSubmit = useCardListSubmit();
    const dispatch = useDispatch();

    const cardList = useSelector((state) => state.cardList)
    const listView = useSelector((state) => state.listView)
    const proxyPrice = useSelector((state) => state.proxyPrice)

    const handleSubmit = () => {
        let textarea = document.getElementsByName('cardList')[0];
        let cardListValue = textarea.value.split('\n');
        
        handleListSubmit(cardListValue);
    }

    const handleSelectChange = (event) => {
        dispatch(setListView(event.target.value))
    }

    const handleCopyClick = () => {
        let listToCopy = [];
    
        switch (listView) {
          case "Proxy":
            listToCopy = proxyList;
            break;
          case "Original":
            listToCopy = originalList;
            break;
          case "All":
            listToCopy = cardList;
            break;
          default:
            break;
        }

        const listString = listToCopy.map(item => `${item.quantity} ${item.name}`).join('\n');

        navigator.clipboard.writeText(listString)
          .then(() => {
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
              }, 3000);
          })
          .catch((err) => {
            console.error('Unable to copy to clipboard', err);
          });
      };

    //TODO: Add context for cards that could not be found
    //TODO: Allow user to remove card (for already owned)

    return ( 
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="form-floating mt-5 mb-5 position-relative">
                    <textarea 
                        className="dark form-control" 
                        name="cardList" 
                        placeholder="Leave a comment here" 
                        id="textarea" 
                        style={{ width: "400px", height: "150px" }}
                    />
                    <label htmlFor="textarea">Paste Deck</label>
                    <button 
                        type="button" 
                        className="btn btn-primary position-absolute end-0 mt-2 mb-3 mr-3" 
                        onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
            </div>
            <div className="row flex justify-content-end align-items-center">
                <div className="col-1 ms-auto me-1 ps-5">
                    <i 
                        className={isCopied ? 'bi bi-check-lg' : 'bi bi-copy'} 
                        onClick={handleCopyClick}
                        style={{ color: isCopied ? '#00DB5B' : '#EDEDED' }}
                    />       
                </div>
                <div className="col-2 m-0 p-0">
                    <select class="dark form-select mt-3 mb-3" onChange={handleSelectChange} style={{width: "140px"}}>
                        <option value={`Proxy`}>Proxy ({proxyList.length})</option>
                        <option value={"Original"}>Original ({originalList.length})</option>
                        <option value={"All"}>All ({cardList.length})</option>
                    </select>
                </div>
            </div>

            <div className="cardArea">
                <div className="row justify-content-center">
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
        </>
    )
}