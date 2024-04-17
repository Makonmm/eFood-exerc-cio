import styled from 'styled-components'

export const MenuListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
  justify-content: center;
  max-width: 1024px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 60px;
    gap: 24px;
  }
`
