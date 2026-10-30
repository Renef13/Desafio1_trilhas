const produtos = {
  coado: { nome: "Café coado", preco: 8 },
  cappuccino: { nome: "Cappuccino", preco: 14 },
  gelado: { nome: "Café gelado", preco: 16 },
  bolo: { nome: "Bolo de chocolate", preco: 14 },
  croissant: { nome: "Croissant na manteiga", preco: 13 },
  pao: { nome: "Pão de queijo (3 un.)", preco: 9 }
};

const sacola = document.querySelector(".sacola");
const formatarMoeda = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
let itens = {};

function renderizarSacola() {
  const lista = document.querySelector("[data-cart-items]");
  const entradas = Object.entries(itens).filter(([, quantidade]) => quantidade > 0);
  const quantidadeTotal = entradas.reduce((soma, [, quantidade]) => soma + quantidade, 0);
  const valorTotal = entradas.reduce((soma, [id, quantidade]) => soma + produtos[id].preco * quantidade, 0);

  document.querySelector("[data-cart-count]").textContent = quantidadeTotal;
  document.querySelector("[data-cart-total]").textContent = formatarMoeda(valorTotal);
  lista.innerHTML = entradas.length ? entradas.map(([id, quantidade]) => {
    const produto = produtos[id];
    return `<div class="item-sacola">
      <strong>${produto.nome}</strong><div class="item-acoes">
        <button type="button" data-change="${id}" data-delta="-1" aria-label="Remover uma unidade de ${produto.nome}">−</button>
        <span>${quantidade}</span>
        <button type="button" data-change="${id}" data-delta="1" aria-label="Adicionar uma unidade de ${produto.nome}">+</button>
      </div>
      <small>${formatarMoeda(produto.preco)} cada</small>
    </div>`;
  }).join("") : '<p class="vazio">Sua sacola está vazia. Escolha algo gostoso no cardápio.</p>';
}

document.addEventListener("click", event => {
  const comprar = event.target.closest("[data-buy]");
  const alterar = event.target.closest("[data-change]");

  if (comprar) {
    const id = comprar.dataset.buy;
    itens[id] = (itens[id] || 0) + 1;
    renderizarSacola();
    document.querySelector("[data-toast]").textContent = `${produtos[id].nome} adicionado à sacola`;
    document.querySelector("[data-toast]").classList.add("visivel");
    window.setTimeout(() => document.querySelector("[data-toast]").classList.remove("visivel"), 1800);
  }

  if (alterar) {
    const id = alterar.dataset.change;
    itens[id] = (itens[id] || 0) + Number(alterar.dataset.delta);
    if (itens[id] <= 0) delete itens[id];
    renderizarSacola();
  }

  if (event.target.closest("[data-open-cart]")) sacola.showModal();
  if (event.target.closest("[data-close-cart]")) sacola.close();
});

renderizarSacola();
