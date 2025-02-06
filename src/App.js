import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Cardapio from "./componentes/Cardapio";
import { v4 as uuidv4 } from 'uuid';
import Menu from "./componentes/Menu";
import RedeSocial from "./componentes/RedeSocial";

function App() {

  const [cardapios, setCardapios] = useState([
    {
      id: uuidv4(),
      nome: 'Entrada',
      cor: '#448457'
    },
    {
      id: uuidv4(),
      nome: 'Prato Principal',
      cor: '#346F9D'
    },
    {
      id: uuidv4(),
      nome: 'Sobremesa',
      cor: '#8b9679'
    },
    {
      id: uuidv4(),
      nome: 'Bebida',
      cor: '#aaa7a7'
    }

  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BRUSCHETTA MEDITERÂNEA',
      descricao: 'Fatias de pão italiano crocante cobertas com tomates frescos, manjericão, azeite de oliva extra virgem e um toque de alho.',
      imagem: './imagens/cardapio/entrada/entradaBruschetta.jpeg',
      cardapio: cardapios[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CARPACCIO DE ABOBRINHA COM PARMESÃO',
      descricao: 'Finas lâminas de abobrinha marinadas em azeite de oliva, limão siciliano e ervas frescas, com lascas de parmesão e amêndoas tostadas.',
      imagem: './imagens/cardapio/entrada/entradaCarpaccioAbobrinha.jpeg',
      cardapio: cardapios[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TÁBUA DE FRIOS SELECIONADOS',
      descricao: 'Uma seleção de queijos finos, embutidos artesanais, azeitonas marinadas e pães rústicos.',
      imagem: './imagens/cardapio/entrada/entradaTabuaFrios.jpeg',
      cardapio: cardapios[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CAMARÃO EMPANHADO AO MOLHO DE LIMÃO SICILIANO',
      descricao: 'Camarões crocantes servidos com um molho cremoso de limão siciliano e ervas frescas.',
      imagem: './imagens/cardapio/entrada/entradaCamaraoEmpanado.jpeg',
      cardapio: cardapios[0].nome
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: 'RISOTO DE CAMARÃO COM ASPARGOS',
      descricao: 'Cremoso risoto de arroz arbóreo, preparado com camarões frescos, aspargos grelhados e um toque de limão siciliano, finalizado com parmesão ralado na hora.',
      imagem: './imagens/cardapio/principal/principalCamarao.jpeg',
      cardapio: cardapios[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MEDALHÃO DE FILÉ AO MOLHO DE VINHO TINTO',
      descricao: 'Suave filé mignon envolto em bacon crocante, servido com um molho reduzido de vinho tinto e purê de batatas com alho assado.',
      imagem: './imagens/cardapio/principal/principalMedalhao.jpeg',
      cardapio: cardapios[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SALMÃO GRELHADO COM CROSTA DE ERVAS',
      descricao: 'Filé de salmão grelhado até ficar suculento, coberto com uma crosta crocante de ervas frescas, acompanhado de risoto de limão siciliano e legumes no vapor.',
      imagem: './imagens/cardapio/principal/principalSalmao.jpeg',
      cardapio: cardapios[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LASANHA DE BERINJELA COM QUEIJO DE CABRA',
      descricao: 'Camadas de berinjela grelhada, molho de tomate caseiro, queijo de cabra e manjericão fresco, assadas até ficarem douradas e irresistíveis.',
      imagem: './imagens/cardapio/principal/principalBerinjela.jpeg',
      cardapio: cardapios[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MOUSSE DE CHOCOLATE BELGA',
      descricao: 'Um mousse aveludado feito com chocolate belga de alta qualidade, finalizado com raspas de chocolate e flor de sal.',
      imagem: './imagens/cardapio/sobremesa/sobremesaMousseChocolate.jpeg',
      cardapio: cardapios[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TIRAMISÙ CLÁSSICO',
      descricao: 'Camadas de biscoito champanhe embebido em café espresso, intercaladas com creme de mascarpone, finalizadas com cacau em pó.',
      imagem: './imagens/cardapio/sobremesa/sobremesaTiramissu.jpeg',
      cardapio: cardapios[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TORTA DE LIMÃO SICILIANO',
      descricao: 'Base crocante de biscoito, recheio cremoso de limão siciliano e cobertura de merengue dourado no maçarico.',
      imagem: './imagens/cardapio/sobremesa/sobremesaTortaLimao.jpeg',
      cardapio: cardapios[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CHEESECAKE DE FRUTAS VERMELHAS',
      descricao: 'Cheesecake clássico de baunilha, servido com uma generosa cobertura de calda de frutas vermelhas frescas.',
      imagem: './imagens/cardapio/sobremesa/sobremesaCheesecake.jpeg',
      cardapio: cardapios[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LIMONADA SICILIANA COM HORTELÃ',
      descricao: 'Refrescante combinação de limão siciliano, folhas de hortelã e água gaseificada, adoçada na medida certa',
      imagem: './imagens/cardapio/bebida/bebidaLimonada.jpeg',
      cardapio: cardapios[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SUCO TROPICAL DE ABACAXI E GENGIBRE',
      descricao: 'Mistura vibrante de abacaxi fresco, gengibre e um toque de mel, ideal para revigorar o paladar.',
      imagem: './imagens/cardapio/bebida/bebidaSucoAbacaxi.jpeg',
      cardapio: cardapios[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CLÁSSICO SPRITZ ITALIANO',
      descricao: 'Coquetel leve com prosecco, Aperol e um toque de água com gás, servido com uma fatia de laranja.',
      imagem: './imagens/cardapio/bebida/bebidaSpritzItaliano.jpeg',
      cardapio: cardapios[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MOJITO DE FRUTAS VERMELHAS',
      descricao: 'Versão especial do mojito tradicional, preparado com rum branco, frutas vermelhas maceradas, hortelã e limão.',
      imagem: './imagens/cardapio/bebida/bebidaMojito.jpeg',
      cardapio: cardapios[3].nome
    }

  ]

  const [pratos, setPratos] = useState(inicial)

  function deletarPrato(id) {
    setPratos(pratos.filter(prato => prato.id !== id));
  }

  function mudarCor(cor, id) {
    setCardapios(cardapios.map(cardapio => {
      if (cardapio.id === id) {
        cardapio.cor = cor;
      }
      return cardapio;
    }));
  }

  function cadastrarCardapio({ nome, cor }) {
    setCardapios([...cardapios, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setPratos(pratos.map(pratos => {
      if (pratos.id === id) pratos.favorito = !pratos.favorito;
      return pratos
    }))
  }

  return (
    <div>
      <RedeSocial local="menu" />
      <Menu />
      <Banner />

      <Formulario aoCriarCardapio={cadastrarCardapio} cardapios={cardapios.map(cardapio => cardapio.nome)} aoCadastrar={prato => setPratos([...pratos, prato])} />
      <section className="cardapios">
        <h1>Sabor & Harmonia</h1>
        {cardapios.map((cardapio, indice) =>
          <Cardapio
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCor}
            key={indice}
            cardapio={cardapio}
            pratos={pratos.filter(prato => prato.cardapio === cardapio.nome)}
            aoDeletar={deletarPrato}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
