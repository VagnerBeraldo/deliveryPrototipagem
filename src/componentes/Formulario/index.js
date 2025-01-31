// import { useState } from 'react'
// import Botao from '../Botao'
// import Campo from '../Campo'
// import ListaSuspensa from '../ListaSuspensa'
// import './formulario.css'
// import { v4 as uuidv4 } from 'uuid';

// const Formulario = ({ aoCadastrar, cardapios, aoCriarCardapio }) => {

//     const [nome, setNome] = useState('')
//     const [descricao, setDescricao] = useState('')
//     const [imagem, setImagem] = useState('')
//     const [cardapio, setCardapio] = useState('')
//     const [nomeCardapio, setNomeCardapio] = useState('')
//     const [corCardapio, setCorCardapio] = useState('')

//     const aoSubmeter = (evento) => {
//         evento.preventDefault()
//         // console.log('form enviado', nome, descricao, imagem, cardapio )
//         aoCadastrar({
//             id: uuidv4(),
//             nome,
//             descricao,
//             imagem,
//             cardapio
//         })
//     }

//     return (
//         <section className="formulario-container">
//             <form className="formulario" onSubmit={aoSubmeter}>
//                 <h2>Criar uma opção de prato.</h2>
//                 <Campo
//                     obrigatorio={true}
//                     label='Nome'
//                     placeholder='Nome do prato'
//                     valor={nome}
//                     aoAlterado={valor => setNome(valor)}/>
//                 <Campo
//                     obrigatorio={true}
//                     label='Descrição' 
//                     placeholder='Descrição do prato'
//                     valor={descricao}
//                     aoAlterado={valor => setDescricao(valor)}/>
//                 <Campo 
//                     label='Imagem' 
//                     placeholder='https://... (endereço da imagem)'
//                     aoAlterado={valor => setImagem(valor)}/>
//                 <ListaSuspensa 
//                     obrigatorio={true}
//                     label='Menu'
//                     items={cardapios} 
//                     valor={cardapio}
//                     aoAlterado={valor => setCardapio(valor)}/>
//                 <Botao texto='Criar prato' />
//             </form>
//             <form className="formulario" onSubmit={(evento) => {
//                 evento.preventDefault()
//                 aoCriarCardapio({ nome: nomeCardapio, cor: corCardapio })
//             }}>
//                 <h2>Criar uma nova seção de cardápio.</h2>
//                 <Campo
//                     obrigatorio={true}
//                     label='Nome'
//                     placeholder='Digite o nome da seção de cardápio'
//                     valor={nomeCardapio}
//                     aoAlterado={valor => setNomeCardapio(valor)}/>
//                 <Campo
//                     obrigatorio={true}
//                     type='color'
//                     label='Cor' 
//                     placeholder='Digite sua cor'
//                     valor={corCardapio}
//                     aoAlterado={valor => setCorCardapio(valor)}/>
//                 <Botao texto='Criar Seção de Cardápio' />
//             </form>
//         </section>
//     )
// }

// export default Formulario



import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import MensagemSucesso from '../MensagemSucesso';
import './formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ aoCadastrar, cardapios, aoCriarCardapio }) => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [cardapio, setCardapio] = useState('');
    const [nomeCardapio, setNomeCardapio] = useState('');
    const [corCardapio, setCorCardapio] = useState('');
    const [mensagem, setMensagem] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        aoCadastrar({
            id: uuidv4(),
            nome,
            descricao,
            imagem,
            cardapio
        });
        setMensagem('Prato criado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    };

    const aoCriarNovaSecao = (evento) => {
        evento.preventDefault();
        aoCriarCardapio({ nome: nomeCardapio, cor: corCardapio });
        setMensagem('Seção criada com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    };

    return (
        <section className="formulario-container">
            {mensagem && <MensagemSucesso mensagem={mensagem} />}
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Criar uma opção de prato.</h2>
                <Campo obrigatorio={true} label='Nome' placeholder='Nome do prato' valor={nome} aoAlterado={setNome} />
                <Campo obrigatorio={true} label='Descrição' placeholder='Descrição do prato' valor={descricao} aoAlterado={setDescricao} />
                <Campo label='Imagem' placeholder='https://... (endereço da imagem)' aoAlterado={setImagem} />
                <ListaSuspensa obrigatorio={true} label='Menu' items={cardapios} valor={cardapio} aoAlterado={setCardapio} />
                <Botao texto='Criar prato' />
            </form>
            <form className="formulario" onSubmit={aoCriarNovaSecao}>
                <h2>Criar uma nova seção de cardápio.</h2>
                <Campo obrigatorio={true} label='Nome' placeholder='Digite o nome da seção de cardápio' valor={nomeCardapio} aoAlterado={setNomeCardapio} />
                <Campo obrigatorio={true} type='color' label='Cor' placeholder='Digite sua cor' valor={corCardapio} aoAlterado={setCorCardapio} />
                <Botao texto='Criar Seção de Cardápio' />
            </form>
        </section>
    );
};

export default Formulario;
