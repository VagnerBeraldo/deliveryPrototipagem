import './botaoComprar.css'

const BotaoComprar = ({ className, texto, children, ...props }) => {
    return (
        <button className={className} {...props}>
            {texto} {children}
        </button>
    );
};

export default BotaoComprar