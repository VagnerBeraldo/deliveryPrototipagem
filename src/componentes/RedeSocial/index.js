import './redeSocial.css'

const RedeSocial = ({ local }) => {
    return (
        <section className={`containerIcons ${local === 'rodape' ? 'rodape' : 'menu'}`}>
            <div className='iconesRedes'>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/facebook.png" alt="" />
                </a>
            </div>

            <div className='iconesRedes'>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/twitter.png" alt="" />
                </a>
            </div>

            <div className='iconesRedes'>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/instagram.png" alt="" />
                </a>
            </div>
        </section>
    )
}

export default RedeSocial;
