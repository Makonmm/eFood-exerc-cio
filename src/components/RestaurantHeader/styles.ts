import styled from 'styled-components'
import headerB from '../../assets/images/Vector.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  color: ${colors.pink};
  font-weight: bold;
  line-height: 21px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-right: 10px;
    margin-bottom: 8px;
  }
`

export const CartButton = styled.h3`
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`

export const HeaderBackground = styled.div`
  background-image: url(${headerB});
  height: 186px;

  @media (max-width: 768px) {
    height: auto;
  }
`
