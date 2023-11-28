import axios from 'axios';

export const fetchCardPrice = async (cardName) => {
    try{
        const response = await axios.get(`https://api.scryfall.com/cards/named?exact=${cardName}`)
        if(response.status === 200) {return response.data}
        else {return 400}
    } catch(error){
        console.error('Axios Error:', error);
        return []
    }
}