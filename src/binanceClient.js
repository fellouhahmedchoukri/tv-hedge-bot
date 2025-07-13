import ccxt from 'ccxt';

const exchange = new ccxt.binance({
  apiKey: process.env.BINANCE_KEY,
  secret: process.env.BINANCE_SECRET,
  options: { defaultType: 'spot' },
});

export async function placeOrder(symbol, side, qty) {
  return await exchange.createOrder(symbol, 'market', side, qty);
}
