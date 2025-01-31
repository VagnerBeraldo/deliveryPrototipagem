import './prato.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import Contador from '../Contador';
import BotaoComprar from '../BotaoComprar';

const Prato = ({ prato, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    function favoritar(){
        aoFavoritar(prato.id);
    }

    const propsFavorito = {
        onClick: favoritar
    }
    
    return (
    <div className="prato">
        <AiFillCloseCircle size={35} className="deletar" onClick={() => aoDeletar(prato.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={prato.imagem} alt={prato.nome} />
        </div>
        <div className="rodape">
            <h4>{prato.nome}</h4>
            <h5>{prato.descricao} </h5>
            <div className='favoritar'>
                {prato.favorito ? <FaHeart className="heart-icon" {...propsFavorito} /> : <FaRegHeart className="heart-icon" {...propsFavorito} />}
                <Contador /> 
            </div>
            <div className='btnComprar' >
                <BotaoComprar className='comprar' texto='Carrinho' style={{ backgroundColor: corDeFundo }} >
                    <FaCartPlus className='iconeComprar'  />
                </BotaoComprar>
            </div>
        </div>
        
    </div>)
}

export default Prato