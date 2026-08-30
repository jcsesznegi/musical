export function clsx(...args: unknown[]) {
  return args.filter(Boolean).join(" ");
}

export function shuffleArray<T>(array: T[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getCardRank(cardNumber: number) {
  const remainder = cardNumber % 13;

  switch (true) {
    case remainder === 1:
      return "A";
    case remainder > 1 && remainder < 11:
      return `${remainder}`;
    case remainder === 11:
      return "J";
    case remainder === 12:
      return "Q";
    case remainder === 0:
      return "K";
    default:
      return "";
  }
}

export function getCardSuit(cardNumber: number) {
  switch (Math.floor(cardNumber / 14)) {
    case 0:
      return "♣";
    case 1:
      return "♦";
    case 2:
      return "♥";
    case 3:
      return "♠";
    default:
      return "";
  }
}

export function getCardValue(cardNumber: number) {
  return cardNumber % 13;
}
