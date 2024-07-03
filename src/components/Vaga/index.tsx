import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const DetalhesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const DetalhesItem = styled.li`
  margin-bottom: 8px;
`

const VagaLink = styled.a`
  border: 1x solid var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

// eslint-disable-next-line prettier/prettier
const Vaga = ({ titulo, localizacao, nivel, modalidade, salarioMin, salarioMax, requisitos }: Props) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <DetalhesList>
      <DetalhesItem>Localizacao: {localizacao}</DetalhesItem>
      <DetalhesItem>Senioridade: {nivel}</DetalhesItem>
      <DetalhesItem>Tipo de contratacao: {modalidade}</DetalhesItem>
      <DetalhesItem>
        Salário: {salarioMin} - {salarioMax}
      </DetalhesItem>
      <DetalhesItem>Requisitos: {requisitos.join(', ')}</DetalhesItem>
    </DetalhesList>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
