# Pausa Café — Simulador de Compras

**Aluno:** Renef Ricardo Costa da Silva  
**Trilha:** Desenvolvimento Mobile

## Sobre a loja

A Pausa Café é uma cafeteria fictícia de receitas simples, café passado na hora e pequenos momentos de descanso.

| Produto | Descrição | Preço |
|---|---|---:|
| Café coado | Grãos brasileiros, moídos na hora | R$ 8,00 |
| Bolo de cenoura | Com cobertura cremosa de chocolate | R$ 12,00 |
| Pão de queijo | Assado na hora, quentinho e macio | R$ 6,00 |

Pedidos a partir de **R$ 50,00** recebem **10% de desconto**.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Como executar

Abra o arquivo `index.html` em um navegador. Clique em **Simular compra** e informe uma quantidade inteira para cada item. Use `0` para não comprar um produto. A simulação informa os subtotais, o desconto aplicável e o total.

## Captura de tela

Adicionar aqui a captura da página, salva em `assets/captura-pagina.png`.

## Casos para testar

- Todos os produtos com quantidade `0`: informa que nenhum produto foi selecionado.
- Um produto selecionado e os demais com `0`: mostra quantidades e subtotal.
- Mais de um produto selecionado: soma os valores corretamente.
- Pedido abaixo de R$ 50,00: não aplica desconto.
- Pedido de R$ 50,00 ou mais: aplica 10% de desconto.
- Quantidade negativa, decimal ou não numérica: informa que a entrada deve ser um inteiro não negativo.
- Cancelamento de um prompt: encerra a simulação.

Os casos acima estão documentados para execução manual no navegador.

## Dificuldade e aprendizado

Minha dificuldade foi entender a sintaxe do JavaScript. Aprendi que praticar e escrever mais código ajuda a compreender melhor como receber valores, convertê-los em números e fazer os cálculos.
