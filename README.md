# Pausa Café — cafeteria

**Aluno:** Renef Ricardo Costa da Silva  
**Trilha:** Desenvolvimento Mobile

## Apresentação

A Pausa Café é uma cafeteria fictícia criada como vitrine digital. A página apresenta bebidas e acompanhamentos com fotos, descrições e preços. Os botões **Comprar** adicionam produtos à sacola, onde é possível ajustar quantidades e consultar o total. O projeto não processa pagamentos nem envia pedidos.

| Produto | Descrição | Preço |
|---|---|---:|
| Café coado | Grãos brasileiros, moídos na hora | R$ 8,00 |
| Cappuccino | Espresso, leite vaporizado e canela | R$ 14,00 |
| Café gelado | Espresso, leite e gelo | R$ 16,00 |
| Bolo de chocolate | Massa fofinha e cobertura cremosa | R$ 14,00 |
| Croissant na manteiga | Folhado, douradinho e assado no dia | R$ 13,00 |
| Pão de queijo | Porção com 3 unidades | R$ 9,00 |

## Tecnologias

- HTML5 para a estrutura da página.
- CSS3 para o visual responsivo.
- JavaScript para os botões e o funcionamento da sacola.
- Node.js, com o módulo de testes nativo node:test, para executar os testes sem dependências externas.

## Como executar

Abra index.html em um navegador. Clique em **Comprar** para adicionar um produto à sacola. Abra **Sacola** para alterar quantidades e conferir o total.

Para executar os testes de JavaScript, abra o terminal nesta pasta e rode:

```sh
node --test testes.js
```

## Captura de tela

A captura ainda não está incluída na pasta do projeto. Quando disponível, salve-a como assets/captura-pagina.png.

## Testes realizados

Executados com node --test testes.js:

- A sacola inicia vazia e mostra total zero.
- Adicionar café coado e cappuccino atualiza a quantidade e soma para R$ 22,00.
- Aumentar e diminuir quantidades atualiza o total; remover o último item deixa a sacola vazia.

## Dificuldade e aprendizado

Tive dificuldade com a sintaxe do JavaScript. Acredito que, com o tempo e praticando mais programação, vou pegar o jeito e entender melhor como escrever os comandos e criar as funcionalidades.
