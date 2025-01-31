import Prato from '../Prato'
import hexToRgba from 'hex-to-rgba';
import './cardapio.css'

const Cardapio = ({ cardapio, pratos, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        pratos.length > 0 && <section className='cardapio' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cardapio.cor, '0.6') }}>
            <input type='color' className='input-cor' value={cardapio.cor} onChange={evento => {
                mudarCor(evento.target.value, cardapio.id);
            }} />
            <h3 style={{ borderColor: cardapio.cor }}>{cardapio.nome}</h3>
            <div className='pratos'>
                {pratos.map((prato, indice) => {
                    return (
                        <Prato 
                            key={indice} 
                            prato={prato} 
                            corDeFundo={cardapio.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar} 
                        />
                    );
                })}
            </div>
        </section>

    )
}

export default Cardapio