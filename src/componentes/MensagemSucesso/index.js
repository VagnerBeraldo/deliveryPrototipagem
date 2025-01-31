import './mensagemSucesso.css';

const MensagemSucesso = ({ mensagem }) => {
    return (
        <div className="mensagem-sucesso">
            <h2>{mensagem}</h2>
        </div>
    );
};

export default MensagemSucesso;
