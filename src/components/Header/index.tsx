import { Logo } from '../Logo'
import * as S from './styles'

const Header = () => (
  <>
    <S.Hero>
      <S.Container className="container">
        <Logo />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.Container>
    </S.Hero>
  </>
)

export default Header
