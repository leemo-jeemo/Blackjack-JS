const cardSuits = ["Spades", "Diamonds", "Clubs", "Hearts"];

const cardRanks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

export function createDeck() {
  let deck = [];
  for (let i = 0; i < cardSuits.length; i++) {
    for (let x = 0; x < cardRanks.length; x++) {
      let card = { rank: cardRanks[x], suit: cardSuits[i] };
      deck.push(card);
    }
  }

  return deck;
}

export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    // randomly pick a card from the deck
    // swap it with the current card index
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  return deck;
}

export function drawCard(deck) {
  if (deck.length === 0) {
    throw new Error("Cannot draw from an empty deck.");
  }
  return deck.pop();
}
