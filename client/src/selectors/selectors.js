export const selectCardList = (state) => state.cardList;
export const selectProxyPrice = (state) => state.proxyPrice;

export const selectSortedLists = (state) => {
    const cardList = selectCardList(state);
    const proxyPrice = selectProxyPrice(state);
  
    const proxyList = cardList.filter((card) => !card.price || card.price === 0 || card.price > proxyPrice);
    const originalList = cardList.filter((card) => card.price !== null && card.price <= proxyPrice);
  
    return { proxyList, originalList };
  };
  