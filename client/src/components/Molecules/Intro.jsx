export function Intro(){
    return (
        <div className="text-center" style={{maxWidth: "70vw"}}>
            <h2 className="mt-5">
                Optimize Your Deck Budget
            </h2>
            <p className="mt-3">
                <strong>To get started </strong>
                set the
                <strong> price </strong> 
                of your proxies in the top left. Then, 
                <strong> paste your deck </strong>
                in the box below and click on the submit button. 
                <br />
                <br />
                The prices for cards are based on the lowest price found on
                <strong> TCGPlayer and Cardmarket. </strong>
                Prices refresh every 24 hours, and can be viewed by hovering over the card.
                Any card that is 
                <strong> above </strong>
                the set proxy price will show up in the proxy list. The
                <strong> total cost </strong>
                for the proxy list and the original list can be seen in the top right-hand corner.
                <br />
                <br />
                All card data is sourced directly from
                <strong> <a href="https://scryfall.com/" target="_blank" rel="noreferrer">Scryfall</a></strong>
                , including the card prices. For high quality proxy printing, we reccommend
                <strong> <a href="https://mtg-print.com" target="_blank" rel="noreferrer">MTG Print.</a></strong>
            </p>
        </div>
    )
}