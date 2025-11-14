const grid = document.getElementById("grid");

stocks.forEach(stock => {
  const logoEl = document.createElement("div");
  logoEl.className = "logo";

  // Mask layer
  const maskEl = document.createElement("div");
  maskEl.className = "logo-mask";
  maskEl.style.setProperty("--logo-url", `url(${stock.logo})`);

  // Number layer
  const valueLayer = document.createElement("div");
  valueLayer.className = "value-layer";

  stock.values.forEach(v => {
    const span = document.createElement("span");
    span.className = `value-text ${v.size}`;
    span.textContent = v.value;
    valueLayer.appendChild(span);
  });

  // Label
  const label = document.createElement("div");
  label.className = "label";
  label.textContent = stock.name;

  // Assemble
  logoEl.appendChild(maskEl);
  logoEl.appendChild(valueLayer);
  logoEl.appendChild(label);

  grid.appendChild(logoEl);
});
