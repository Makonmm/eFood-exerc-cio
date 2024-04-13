import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyle = styled.button<Omit<ButtonProps, 'onClick'>>`
  background-color: ${(props) =>
    props.name === 'info' ? colors.vermelho : colors.bege};
  color: ${(props) => (props.name === 'info' ? colors.bege : colors.vermelho)};
  cursor: pointer;
  width: ${(props) => (props.name === 'info' ? '82px' : '304px')};
  height: 24px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  margin: ${(props) => (props.first === 'first' ? '24px 0 8px 0' : '')};

  a {
    color: ${(props) =>
      props.name === 'info' ? colors.bege : colors.vermelho};
  }
`
