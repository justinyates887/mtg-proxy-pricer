const initialState = {
    cardList: [],
    notFoundList: [],
    proxyPrice: 1.00,
    proxyCost: 0.00,
    originalCost: 0.00,
    listView: "Proxy"
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD_LIST":
            return {...state, cardList: action.payload }
        case "SET_NOT_FOUND_LIST":
            return {...state, notFoundList: action.payload }
        case "SET_PROXY_PRICE":
            return { ...state, proxyPrice: action.payload }
        case "SET_LIST_VIEW":
            return { ...state, listView: action.payload }
        case "SET_PROXY_COST":
            return { ...state, proxyCost: action.payload}
        case "SET_ORIGINAL_COST":
            return { ...state, originalCost: action.payload}
        default:
            return state;
    }
  };
  
  export default reducer;
  