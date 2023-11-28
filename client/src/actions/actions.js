export const setCardList = (list) => ({
    type: "SET_CARD_LIST",
    payload: list
})

export const setProxyPrice = (price) => ({
    type: "SET_PROXY_PRICE",
    payload: parseFloat(price.toFixed(2))
})

export const setProxyCost = (cost) => ({
    type: "SET_PROXY_COST",
    payload: cost
})

export const setOriginalCost = (cost) => ({
    type: "SET_ORIGINAL_COST",
    payload: cost
})

export const setListView = (view) => ({
    type: "SET_LIST_VIEW",
    payload: view
})