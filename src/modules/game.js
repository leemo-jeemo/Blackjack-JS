export function calculateHandValue(hand) {
  let total = 0;
  let aces = 0;
  for (const card of hand) {
    if (card.rank === "Ace") {
      aces++;
    } else if (
      card.rank === "King" ||
      card.rank === "Queen" ||
      card.rank === "Jack"
    ) {
      total += 10;
    } else {
      total += Number(card.rank);
    }
  }
}
