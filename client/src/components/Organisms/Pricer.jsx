import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCardListSubmit from '../../hooks/useCardListSubmit';
import { Navbar, Intro, Footer } from '../Molecules';
import { setListView } from '../../actions/actions';
import { selectSortedLists } from '../../selectors/selectors';
import { CardArea } from './CardArea';
import { LoadingCardArea } from './LoadingCardArea';
import { ErrorChip } from '../Atoms';

export function Pricer(){
    const { proxyList, originalList } = useSelector(selectSortedLists);
    const [isCopied, setIsCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleListSubmit = useCardListSubmit();
    const dispatch = useDispatch();

    const cardList = useSelector((state) => state.cardList)
    const listView = useSelector((state) => state.listView)
    const notFoundList = useSelector((state) => state.notFoundList)

    const handleSubmit = async () => {
        setIsLoading(true);
    
        try {
          let textarea = document.getElementsByName('cardList')[0];
          let cardListValue = textarea.value.split('\n');
    
          await handleListSubmit(cardListValue);
    
        } catch (error) {
          console.error('Error submitting the list:', error);
        } finally {
          setIsLoading(false);
        }
      };

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

    return ( 
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <Intro />
                <div className="mt-5 mb-1">
                {notFoundList.map((card) => {
                      return (
                        <ErrorChip card={card} />
                      )
                })}
                </div>
                <div className="form-floating mb-5 position-relative">
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
            <div className="row flex justify-content-end align-items-center" style={{ maxWidth: "100vw"}}>
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
            {isLoading ? <LoadingCardArea /> : <CardArea />}
            <Footer />
        </>
    )
}