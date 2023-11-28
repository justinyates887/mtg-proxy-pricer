# MTG Proxy Pricer

MTG Proxy Pricer is a web tool that allows you to budget your magic decks. It will compare the lowest card prices found on scryfall (sourced from TCGPlayer and Cardmarket). Prices update every 24 hours. For more information on pricing, visit [Scryfall](https://scryfall.com/docs/faqs/where-do-scryfall-prices-come-from-7)

The tool will sort your deck into two categories, Proxy and Original. If the price of the Original is **greater than** the proxy price, it will put that card into the proxy list. The lists can then be copied in a {Qty} {Name} format for transfer convinience.

Currently, card prices are only shown from their original set.

#### Known Bugs

[] Cards not found does not indicate to user.

[] Wrong math??? Card count on dropdown does not meet expectation. Might be missing some refs for images, or price calculation error. Array count of cards found is correct.

#### Future Features

[] Remove card for already owned cards instead of having to remove them from list

[] Ability to select from different sets

[] Possible TCGPlayer integration for easy checkout (depends on price/ability)

[] Add icon

[] Add description/intro on how to use tool

[] Add tooltip hover to price breakdown

[] Add loading context to cardspace when API request is loading

[] Find a way to optimize API call ???