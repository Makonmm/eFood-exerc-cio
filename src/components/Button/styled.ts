import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyle = styled.button<Omit<ButtonProps, 'onClick'>>`
  background-color: ${({ name }) =>
    name === 'info' ? colors.pink : colors.beige};
  color: ${({ name }) => (name === 'info' ? colors.beige : colors.pink)};
  cursor: pointer;
  width: ${({ name }) => (name === 'info' ? '82px' : '304px')};
  height: 24px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  margin: ${({ first }) => (first === 'first' ? '24px 0 8px 0' : '')};

  a {
    color: ${({ name }) => (name === 'info' ? colors.beige : colors.pink)};
  }
`
