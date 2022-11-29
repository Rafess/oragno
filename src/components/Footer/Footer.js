import './Footer.css'

 const Footer = () => {
    return(
        <footer>
            <div className='social'>
                <a href='#blank'>
                    <img src='./imagens/fb.png' alt='facebook logo'/>
                </a>
                <a href="#blank">
                    <img src='./imagens/tw.png' alt='twitter logo'/>
                </a>
                <a href="#blank">
                    <img src='./imagens/ig.png' alt='instagram logo'/>
                </a>
            </div>
            <div>
                <img src='./imagens/logo.png' alt='organo logo'/>
            </div>
            <div className="developed">
                <p> Desenvolvido por Rafael de Oliveira </p>
            </div>
        </footer>
    )
}

export default Footer;