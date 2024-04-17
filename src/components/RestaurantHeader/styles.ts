import styled from 'styled-components'
import headerB from '../../assets/images/Vector.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${colors.pink};
  font-weight: bold;
  line-height: 21px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px; /* Adicionando margem inferior entre o título e o botão */
  width: 108px;
  text-align: center;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-right: 10px;
    margin-bottom: 8px;
    text-align: center;
  }
`

export const CartButton = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
    width: 100%;
    text-align: center;
  }
`

export const HeaderBackground = styled.div`
  background-image: url(${headerB});
  height: 186px;

  @media (max-width: 768px) {
    height: auto;
  }
`
