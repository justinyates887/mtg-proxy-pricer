import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardPrice } from '../utils/axios';
import { setCardList, setProxyCost, setOriginalCost, setNotFoundList } from '../actions/actions';
import { selectProxyPrice } from '../selectors/selectors';

const useCardListSubmit = () => {
  const dispatch = useDispatch();
  const proxyPrice = useSelector(selectProxyPrice);

  const handleListSubmit = async (list) => {
    dispatch(setCardList([]));

    const newCards = [];
    const notFound = [];
    let newProxyCost = 0;
    let newOriginalCost = 0;

    for (const element of list) {
      const regex = /^(\d+)\s+(.+)/;
      const matches = regex.exec(element);

      if (matches && matches.length >= 3) {
        const quantity = matches[1];
        const cardName = matches[2];

        try {
          const response = await fetchCardPrice(cardName.split(' ').join());

          if (response && response !== 400) {
            newCards.push({
              name: cardName,
              quantity: quantity,
              price: parseFloat(response.prices.usd),
              imageURL: response.image_uris ? response.image_uris.normal : response.card_faces[0].image_uris.normal,
            });

            const cardPrice = parseFloat(response.prices.usd);

            if (!isNaN(cardPrice)) {
              if (cardPrice > proxyPrice) {
                newProxyCost += (proxyPrice * quantity);
              } else {
                newOriginalCost += (cardPrice * quantity);
              }
            }
          } else if (response === 400){
                notFound.push(cardName);
            }
        } catch (error) {
          notFound.push(element)
        }
      } else {
        if(element !== ""){
            notFound.push(element)
        }
      }
    }

    // Update Redux store variables
    dispatch(setCardList(newCards));
    dispatch(setNotFoundList(notFound));
    dispatch(setProxyCost(newProxyCost));
    dispatch(setOriginalCost(newOriginalCost));
  };

  // Use useEffect to trigger the update when proxyPrice changes
  useEffect(() => {
  }, [proxyPrice]);

  return handleListSubmit;
};

export default useCardListSubmit;
