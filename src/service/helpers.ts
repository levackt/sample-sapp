import { types } from "secretjs";
import { Decimal } from "@iov/encoding";

// NARROW NO-BREAK SPACE (U+202F)
const thinSpace = "\u202F";

export function printableBalance(balance?: readonly types.Coin[]): string {
  if (!balance || balance.length === 0) return "–";
  return balance.map(printableCoin).join(", ");
}

export function printableCoin(coin?: types.Coin): string {
  if (!coin) {
    return "0";
  }
  if (coin.denom.startsWith("u")) {
    const ticker = coin.denom.slice(1).toUpperCase();
    return Decimal.fromAtomics(coin.amount, 6).toString() + thinSpace + ticker;
  } else {
    return coin.amount + thinSpace + coin.denom;
  }

  
}

