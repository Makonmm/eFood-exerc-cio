import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
