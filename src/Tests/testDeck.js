import { createDeck, shuffleDeck, drawCard } from "../modules/deck.js";

const deck = createDeck();
const ogDeck = [...deck];
const ogOrder = JSON.stringify(deck);
shuffleDeck(deck);

const drawnCard = drawCard(deck);

const ogCards = ogDeck.map((card) => `${card.rank} of ${card.suit}`);
const shuffledCards = deck.map((card) => `${card.rank} of ${card.suit}`);
ogCards.sort();
shuffledCards.sort();

const suitCounts = deck.reduce((counts, card) => {
  counts[card.suit] = (counts[card.suit] || 0) + 1;
  return counts;
}, {});

const rankCounts = deck.reduce((counts, card) => {
  counts[card.rank] = (counts[card.rank] || 0) + 1;
  return counts;
}, {});

console.log("Order changed:", ogOrder !== JSON.stringify(deck));
console.log("Drawn card:", drawnCard);
console.log("Remaining cards:", deck.length);
console.log(JSON.stringify(ogCards) === JSON.stringify(shuffledCards));
console.log("Deck size:", deck.length);
console.log(suitCounts);
console.log(rankCounts);
