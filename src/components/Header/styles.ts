import styled from 'styled-components'
import { colors } from '../../styles'
import hero from '../../assets/images/Vector.png'

export const Hero = styled.div`
  background-image: url(${hero});
  height: 384px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 40px;
    height: 284px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 64px 0 40px 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.h1`
  color: ${colors.pink};
  font-weight: 900;
  margin-top: 138px;
  width: 540px;
  height: 82px;
  font-size: 36px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 34px;
    width: 100%;
    font-size: 28px;
  }
`
