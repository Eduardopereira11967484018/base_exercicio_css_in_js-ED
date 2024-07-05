import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
:root {
  --cor-principal: #a7727d;
  --cor-secundaria: #f9f5e7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}
`
export default EstiloGlobal

export const HeroStyle = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  & div {
    position: relative;
    color: #eee;
  }

  .heroTitle {
    font-family: Gloock, serif;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    .heroTitle {
      font-size: 32px;
    }
  }
`

export const VagaStyle = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  .vagaTitulo {
    font-weight: bold;
    margin-bottom: 16px;
  }

  .vagaLink {
    border-color: var(--cor-secundaria);
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

    @media (max-width: 768px) {
      display: block;
    }
  }

  .vaga:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }

  .vaga:hover a {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`
export const ListaVagasStyle = styled.div`
  .vagas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .vagas {
      grid-template-columns: 1fr;
    }
  }
`

export const FormvagasStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  .btnPesquisar {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
  }

  .campo {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
`
export const CabecalhoStyle = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
