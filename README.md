# 🛍️ PROJETO REACT: Página de restaurante delivery (Prototipagem)
- Uma aplicação desenvolvida para estudar e explorar a biblioteca React.
- Esta página foi criada com base no curso da Alura (React: desenvolvendo com javaScript e React: como os componentes funcionam), não é uma criação minha. 

<br><br>

## 📖 Descrição
- O rect é One-way Data Binding, o fluxo de informação é passado do pai para o filho, sempre nesse sentido, o filho recebe as propriedades (props). Esse fluxo de informação / alteração facilita a manutenibilidade, pois inspecionando o código podemos identificar a origem da informação e rastreá-la.
As alterações realizadas no front pelo usuário não são renderizadas pelo DOM real e sim pelo DOM virtual do react (em memória), assim, a cada mudança o react modifica seu DOM virtual, após comparar com o real, e somente depois rederiza no DOM real, deixando a aplicação mais performática.

- Merece destaque, neste trabalho, a criação de componentes, uso de map e (Hook) useState.

- Componentes: são trechos de código independente que podem ser reaproveitados, podem ter apenas um HTML, como no caso de um rodapé, ou podem conter funções que traram interatividade a página, deixando-a mais interessante.    

- map: o método map(), com base em uma função fornecida ele percorre o array, gera um novo e diferente array, com base na instrução fornecida pela função, mantendo o array original intacto. Método muito utilizado para renderizar, por exemplo os times e seus colaboradores, permitindo a criação dinâmica de elementos.  

- useState: grande responsável pela possibilidade de alterações no front. A cada mudança do estado ele promove um 'set' que será alterado no virtual DOM para depois renderizar o DOM real. Ele é utilizado para controlar o estado funcional dos componentes, a todo momento que a interface sofre uma modificação.  

<br><br>

## 📝 Fluxo da informação
- O prato está contido dentro do cardápio e o cardápio inicial rederiza com o contido no app.js. Para estilo, cada componente possui seu arquivo de css próprio 
<br><br>

## 🚀 Como abrir o projeto
1. no prompt de cmd digite: `node -v` para retornar a versão, não retornando, instale o node 
2. abrir o prompt de comando ou bash do github e navegar até a pasta do projeto
3. digitar: `npm install` ou `npm i` (para instalar as dependências)
4. digitar: `npm start` (para abrir o projeto)

<br><br>
## 💡 Modificações:
O organograma (organo) se transformou em uma abstração de uma página de restaurante delivery.

1. inclusão de menu responsivo e redes sociais

2. troca do banner 

3. componentes: 
	- BotaoComprar: 
	(botão para simbolizar o carrinho). O botão também recebe o estilo de background dinâminco.
	- Contador:
	contador para simbolizar a quantidade de itens
	- MensagemSucesso
	após criar um cardápio ou prato uma mensagem indica o sucesso da solicitação
	- RedeSocial
	criado para reaproveitar os ícones do rodapé, no menu
 
4. adaptação do rodapé

5. responsividade 

6. refatoração


<br><br>
## 👩‍💻 Desenvolvedor / Autor
- Vagner Beraldo
- Aluno do 2º semestre do curso de Desenvolvimento de Sistemas no SENAC - Santo Amaro.


<br><br>
## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)
- React.js
- Hooks: useState

<br><br>
## 🛠️ IDE Utilizada
- Visual Studio Code


<br><br>
## 📝 Notas Adicionais
Este projeto foi desenvolvido como parte de estudos pessoais, e qualquer feedback ou contribuição é bem-vindo.

<br><br>
## Agradecimentos
- [Alura](https://alura.com.br) 
- [Caroline Sanches](https://www.canva.com/p/carolinesanches/) (designer do banner disponível no canva)

<br><br>
### link da página:
## [Página_restaurante_delivery](https://delivery-prototipagem.vercel.app/)

