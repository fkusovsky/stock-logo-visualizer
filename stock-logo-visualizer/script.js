const grid = document.getElementById('grid');

stocks.forEach(stock => {
  const logoEl = document.createElement('div');
  logoEl.className = 'logo';

  const maskEl = document.createElement('div');
  maskEl.className = 'logo-mask';
  
  // Dynamically set mask URL for this logo
  maskEl.style.setProperty('--logo-url', `url(${stock.logo})`);

  const valueLayer = document.createElement('div');
  valueLayer.className = 'value-layer';
  stock.values.forEach(v => {
    const span = document.createElement('span');
    span.className = `value-text ${v.size}`;
    span.textContent = v.value;
    valueLayer.appendChild(span);
  });

  logoEl.appendChild(maskEl);
  logoEl.appendChild(valueLayer);
  grid.appendChild(logoEl);
});

