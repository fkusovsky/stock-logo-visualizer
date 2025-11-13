let previousValues = {};

// Create one logo block
async function createStockLogo(stock) {
  const value = await fetchStockValue(stock.symbol);
  const prev = previousValues[stock.symbol];
  previousValues[stock.symbol] = parseFloat(value);

  const logo = document.createElement('div');
  logo.className = 'logo';

  // Determine direction of change
  if (prev && value !== "N/A") {
    if (parseFloat(value) > prev) logo.classList.add('up');
    else if (parseFloat(value) < prev) logo.classList.add('down');
  }

  // Repeated stock price numbers
  const valueLayer = document.createElement('div');
  valueLayer.className = 'value-layer';
  for (let i = 0; i < 120; i++) {
    const text = document.createElement('div');
    text.className = 'value-text';
    const sizeClass = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
    text.classList.add(sizeClass);
    text.textContent = value;
    valueLayer.appendChild(text);
  }
  logo.appendChild(valueLayer);

  // Apply SVG mask (logo shape)
  const maskLayer = document.createElement('div');
  maskLayer.className = 'logo-mask';
  maskLayer.style.maskImage = `url('logos/${stock.symbol}.svg')`;
  maskLayer.style.webkitMaskImage = `url('logos/${stock.symbol}.svg')`;
  maskLayer.style.background = 'white';
  logo.appendChild(maskLayer);

  // Label
  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = `${stock.name} (${stock.symbol}) - $${value}`;
  logo.appendChild(label);

  // Animate price reaction (fade back to neutral)
  if (logo.classList.contains('up') || logo.classList.contains('down')) {
    setTimeout(() => {
      logo.classList.remove('up', 'down');
    }, 2000);
  }

  return logo;
}

// Render all logos in grid
async function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  for (const stock of STOCKS) {
    const logo = await createStockLogo(stock);
    grid.appendChild(logo);
  }
}

// Initial render and auto-refresh every 30s
renderGrid();
setInterval(renderGrid, 30000);
