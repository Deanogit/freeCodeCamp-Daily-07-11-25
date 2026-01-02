// Counting Cards
// A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

// Order does not matter. Picking card A then card B is the same as picking card B then card A.
// For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.

function combinations(cards) {
  if (cards > 26) cards = 52 - cards;

  let result = 1;
  for (let i = 1; i <= cards; i++) {
    // We multiply by the next decreasing number from 52
    // and divide by the next increasing number from 1
    result = (result * (52 - i + 1)) / i;
  }

  return Math.round(result);

  // probability problem
  // c(n,k) = n!/k!(n-k)!
  //
  // let n = 52
  // for (let i = 52; i > 0; i-- ){
  //    n *= n - 1
  // }
  // console.log(cards)
  // console.log(52* 51 / 2 * 1)

  // return cards;
}
