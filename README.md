# tv-hedge-bot

🤖 Bot Binance exécutant automatiquement des signaux webhook de TradingView.

## 🚀 Déploiement

Cliquez ici pour déployer sur Railway :

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

## 🔧 Variables d'environnement

- `BINANCE_KEY` : votre clé API Binance
- `BINANCE_SECRET` : votre secret Binance
- `PASSPHRASE` : passphrase utilisée dans le Pine Script (`#1960AlGeR@+=`)

## 📡 Webhook

L'URL finale sera :  
`https://<votre-app>.up.railway.app/webhook`

Copiez-la dans TradingView → Créez une alerte → Collez l’URL + activez le script `strategy.pine`.

## 🔒 Sécurité

Le bot valide chaque requête avec le champ `passphrase`.

