const grid = document.getElementById('grid');

stocks.forEach(stock => {
  const card = document.createElement('div');
  card.className = 'logo';

  // Mask layer for SVG
  const mask = document.createElement('div');
  mask.className = 'logo-mask';
  mask.style.maskImage = `url(${stock.logo})`;
  mask.style.webkitMaskImage = `url(${stock.logo})`;
  card.appendChild(mask);

  // Number layer
  const valueLayer = document.createElement('div');
  valueLayer.className = 'value-layer';
  stock.values.forEach(val => {
    const span = document.createElement('span');
    span.className = 'value-text medium';
    span.textContent = val;
    valueLayer.appendChild(span);
  });
  card.appendChild(valueLayer);

  // Label
  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = stock.name;
  card.appendChild(label);

  grid.appendChild(card);
});
