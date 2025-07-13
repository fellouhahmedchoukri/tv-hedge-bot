import express from 'express';
import bodyParser from 'body-parser';
import { placeOrder } from './binanceClient.js';

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const { passphrase, symbol, side, qty, hedgeLevel, positionType } = req.body;
  if (passphrase !== process.env.PASSPHRASE) {
    return res.status(401).send({ error: 'Invalid passphrase' });
  }

  try {
    const result = await placeOrder(symbol, side, qty);
    console.log(`[${positionType}] ${side} ${qty} ${symbol} | hedgeLevel=${hedgeLevel}`, result);
    res.send({ success: true, result });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Bot en ligne sur port ${PORT}`));
