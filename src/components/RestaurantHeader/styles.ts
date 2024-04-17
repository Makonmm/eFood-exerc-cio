import styled from 'styled-components'
import headerB from '../../assets/images/Vector.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${colors.pink};
  font-weight: bold;
  line-height: 21px;
`

export const Title = styled.h2`
  margin-right: 340px;
  width: 108px;
  text-align: center;
  font-size: 18px;
`

export const CartButton = styled.h3`
  margin-left: 194px;
  width: 256px;
  text-align: right;
  font-size: 18px;
  cursor: pointer;
`

export const HeaderBackground = styled.div`
  background-image: url(${headerB});
  height: 186px;
`
