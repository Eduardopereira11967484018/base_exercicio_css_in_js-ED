import styled from 'styled-components'

//componente Styled Components
const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
  </Header>
)

export default Cabecalho
