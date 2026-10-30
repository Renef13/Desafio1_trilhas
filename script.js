function simularCompra() {
  const produtos = [
    { nome: "Café coado", preco: 8 },
    { nome: "Bolo de cenoura", preco: 12 },
    { nome: "Pão de queijo", preco: 6 }
  ];
  const compra = [];

  for (const produto of produtos) {
    const resposta = prompt(`Quantas unidades de ${produto.nome} deseja? Digite 0 para não comprar.`);
    if (resposta === null) return;
    const quantidade = Number(resposta);

    if (!Number.isInteger(quantidade) || quantidade < 0) {
      alert("Digite uma quantidade inteira igual ou maior que zero. Tente novamente.");
      return;
    }

    compra.push({ ...produto, quantidade, subtotal: produto.preco * quantidade });
  }

  const total = compra.reduce((soma, item) => soma + item.subtotal, 0);
  if (total === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  const desconto = total >= 50 ? total * 0.1 : 0;
  const linhas = compra.map(item => `${item.nome}: ${item.quantidade} unidade(s) — ${moeda(item.subtotal)}`);
  linhas.push(`\nSubtotal: ${moeda(total)}`);
  if (desconto > 0) linhas.push(`Desconto de 10%: −${moeda(desconto)}`);
  linhas.push(`Total da compra: ${moeda(total - desconto)}`);
  alert(linhas.join("\n"));
}

function moeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
