import { Logo } from '../Logo'
import * as S from './styles'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.FooterContainer className="container">
          <Logo />
          <S.SocialMedias>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitterr" />
            </a>
          </S.SocialMedias>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado
          </p>
        </S.FooterContainer>
      </S.Footer>
    </>
  )
}

export default Footer
