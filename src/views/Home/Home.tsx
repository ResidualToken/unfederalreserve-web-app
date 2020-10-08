import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Balances from './components/Balances'
import Button from '../../components/Button'
import chef from '../../assets/img/background.svg'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        title="Be the Next unFederalReserve"
        subtitle="Stake Uniswap LP tokens or UnFederalReserve LP tokens to request your unFederalReserve membership!"
      />

      <Container>
        <Balances />
      </Container>
      <ButtonWrap>
        <Button text="Emit coins" to="/farms" variant="secondary" />
      </ButtonWrap>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`
const ButtonWrap = styled.div`
  display: flex;
  margin-top: 80px;
  @media (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export default Home
