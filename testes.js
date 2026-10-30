const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function iniciarApp() {
  let aoClicar;
  const elementos = {
    ".sacola": { showModal() { this.aberta = true; }, close() { this.aberta = false; } },
    "[data-cart-items]": { innerHTML: "" },
    "[data-cart-count]": { textContent: "0" },
    "[data-cart-total]": { textContent: "" },
    "[data-toast]": { textContent: "", classList: { add() {}, remove() {} } }
  };
  const document = {
    querySelector: seletor => elementos[seletor],
    addEventListener: (evento, callback) => { if (evento === "click") aoClicar = callback; }
  };
  const arquivo = fs.readFileSync(path.join(__dirname, "script.js"), "utf8");
  vm.runInNewContext(arquivo, { document, window: { setTimeout() {} } });

  return {
    elementos,
    clicar(seletor, dataset = {}) {
      aoClicar({ target: { closest: alvo => alvo === seletor ? { dataset } : null } });
    }
  };
}

test("a sacola inicia vazia com total zero", () => {
  const app = iniciarApp();
  assert.equal(app.elementos["[data-cart-count]"].textContent, 0);
  assert.match(app.elementos["[data-cart-total]"].textContent, /0,00/);
  assert.match(app.elementos["[data-cart-items]"].innerHTML, /sacola está vazia/);
});

test("Comprar adiciona produtos e soma os preços", () => {
  const app = iniciarApp();
  app.clicar("[data-buy]", { buy: "coado" });
  app.clicar("[data-buy]", { buy: "cappuccino" });
  assert.equal(app.elementos["[data-cart-count]"].textContent, 2);
  assert.match(app.elementos["[data-cart-total]"].textContent, /22,00/);
  assert.match(app.elementos["[data-cart-items]"].innerHTML, /Café coado/);
  assert.match(app.elementos["[data-cart-items]"].innerHTML, /Cappuccino/);
});

test("os controles alteram e removem quantidades", () => {
  const app = iniciarApp();
  app.clicar("[data-buy]", { buy: "coado" });
  app.clicar("[data-change]", { change: "coado", delta: "1" });
  assert.equal(app.elementos["[data-cart-count]"].textContent, 2);
  assert.match(app.elementos["[data-cart-total]"].textContent, /16,00/);
  app.clicar("[data-change]", { change: "coado", delta: "-1" });
  app.clicar("[data-change]", { change: "coado", delta: "-1" });
  assert.equal(app.elementos["[data-cart-count]"].textContent, 0);
  assert.match(app.elementos["[data-cart-total]"].textContent, /0,00/);
});
