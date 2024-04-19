import { useState } from 'react'
import { Link } from 'react-router-dom'
import close from '../../assets/images/close.png'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { ButtonStyle } from '../Button/styled'
import Button from '../Button'
import * as S from './styles'
import { Restaurant, MenuItem } from '../../types/api'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export interface CardProps {
  isrestaurant: boolean
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    } else {
      return descricao
    }
  }

  return (
    <S.CardContainer isrestaurant={true}>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <Tag
        destacado={restaurant.destacado as boolean}
        tipo={restaurant.tipo as string}
      />
      <S.CardInfo isrestaurant={true}>
        <S.CardHeader isrestaurant={true}>
          <h3>{restaurant.titulo}</h3>
          <S.Score>
            <span>{restaurant.avaliacao}</span>
            <img src={star} alt={restaurant.titulo} />
          </S.Score>
        </S.CardHeader>
        <S.Description isrestaurant={true}>
          {getDescricao(restaurant.descricao)}
        </S.Description>
        <ButtonStyle name="info">
          <Link to={`/details/${restaurant.id}`}>Saiba Mais</Link>
        </ButtonStyle>
      </S.CardInfo>
    </S.CardContainer>
  )
}

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)
  const addToCart = () => {
    dispatch(add(item))
    setModalIsOpen(false)
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    } else {
      return descricao
    }
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <S.CardContainer isrestaurant={false}>
        <img src={item.foto} alt={item.nome} onClick={openModal} />
        <S.CardInfo isrestaurant={false}>
          <S.CardHeader isrestaurant={false}>
            <h3>{item.nome}</h3>
          </S.CardHeader>
          <S.Description isrestaurant={false}>
            {getDescricao(item.descricao)}
          </S.Description>
          <Button name="add" onClick={openModal}>
            Adicionar ao carrinho
          </Button>
        </S.CardInfo>
      </S.CardContainer>

      {modalIsOpen && (
        <>
          <S.ModalContainer className="container" onClick={closeModal}>
            <div className="overlay"></div>
            <img src={close} alt="Ícone de fechar" onClick={closeModal} />
            <S.ModalContent>
              <S.ModalImage src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <p>
                  {item.porcao !== '1 pessoa'
                    ? `Serve: de ${item.porcao}`
                    : `Serve: ${item.porcao}`}
                </p>
                <ButtonStyle
                  name="add"
                  onClick={addToCart}
                >{`Adicionar ao carrinho - ${formataPreco(
                  item.preco
                )}`}</ButtonStyle>
              </div>
            </S.ModalContent>
          </S.ModalContainer>
        </>
      )}
    </>
  )
}

export { RestaurantCard, MenuItemCard }
