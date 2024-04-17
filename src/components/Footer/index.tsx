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
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
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
