# 🕹️ AluGames

O AluGames é um projeto desenvolvido para gerenciar o aluguel de boardgames (jogos de tabuleiro). O foco principal deste projeto foi praticar a manipulação do DOM (Document Object Model) e a lógica de programação com JavaScript.

## 🚀 Funcionalidade de Destaque
Diferente de sistemas de aluguel comuns, foi implementado um **Limitador de Aluguel Ativo**. 

### Como funciona:
Para garantir uma rotatividade justa dos jogos e evitar o acúmulo de itens com um único usuário, o sistema:
- Impede que um novo jogo seja alugado se o usuário já possuir um aluguel ativo.
- Exibe alertas personalizados na tela (via interface, sem travar o navegador) informando a necessidade de devolução para novas locações.
- Altera visualmente o estado do jogo (estilização CSS) para indicar disponibilidade ou posse.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estruturação semântica do dashboard.
- **CSS3**: Estilização personalizada, incluindo estados de "alugado" com filtros de escala de cinza e efeitos de interatividade (hover).
- **JavaScript (ES6+)**: 
  - Controle de estado da aplicação.
  - Manipulação dinâmica de classes CSS.

## 📈 Evolução Técnica
Este projeto marca a transição de scripts básicos para uma organização de código baseada na **Separação de Responsabilidades**, onde a lógica de comportamento (JS), o estilo (CSS) e a estrutura (HTML) são mantidos de forma independente para facilitar a manutenção e escalabilidade.

---
*Projeto desenvolvido como parte dos estudos de Lógica de Programação e Desenvolvimento Web.*
