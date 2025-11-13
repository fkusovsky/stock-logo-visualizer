// Selected companies
const STOCKS = [
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'META', name: 'Meta' },
  { symbol: 'GOOGL', name: 'Google' },
  { symbol: 'ADBE', name: 'Adobe' },
  { symbol: 'AAPL', name: 'Apple' }
];

// Your Finnhub API key
const FINNHUB_API_KEY = "d4an7qhr01qseda2fj0gd4an7qhr01qseda2fj10";

// API URL template
const API_URL = symbol =>
  `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;

// Fetch live stock value
async function fetchStockValue(symbol) {
  try {
    const res = await fetch(API_URL(symbol));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.c ? data.c.toFixed(2) : "N/A";
  } catch (err) {
    console.error(`Error fetching ${symbol}:`, err);
    return "N/A";
  }
}
