
import RedeSocial from '../RedeSocial'
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       
       <section>
        <img className='logoFooter' src="/imagens/logo.png" alt="logo restaurante sabor e harmonia" />
       </section>

       <section className='desenvolvedores'>
        <p>
            Desenvolvido por Alura
        </p>
        <p>
            Adaptado por Vagner Beraldo
        </p>

        <p>
            &copy; 2025 Todos os direitos reservados
        </p>
       </section>
       
        <RedeSocial local="rodape"/>

    </footer>
    )
}

export default Rodape