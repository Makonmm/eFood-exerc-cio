import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.div`
  background-color: ${colors.beige};
  margin-top: 80px;

  p {
    width: 480px;
    height: 24px;
    color: ${colors.pink};
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 768px) {
    p {
      width: 340px;
    }
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
`

export const SocialMedias = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;
  column-gap: 8px;

  li {
    background-color: ${colors.pink};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    a {
      color: ${colors.beige};
      font-size: 14px;
    }
  }
`
