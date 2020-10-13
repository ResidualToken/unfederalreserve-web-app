import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Balances from './components/Balances'
import Button from '../../components/Button'
import Parallax from '../../components/Parallax'
import chef from '../../assets/img/background.svg'
import bitcoinOne from '../../assets/img/bitcoin4.png'
import bitcoinTwo from '../../assets/img/bitcoin2.png'
import bitcoinTree from '../../assets/img/bitcoin3.png'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        title="Be the Next unFederalReserve"
        subtitle="Stake Uniswap LP tokens or UnFederalReserve LP tokens to request your unFederalReserve membership!"
      />
      <Container>
        <StyledParallaxCenter>
        <Parallax path={bitcoinOne} id="top" depth={0.3}></Parallax>
        </StyledParallaxCenter>
        <Balances />
      </Container>
      <ButtonWrap>
        <StyledParallaxBottomFirst>
          <Parallax path={bitcoinTwo} id="bottom" depth={0.7}></Parallax>
        </StyledParallaxBottomFirst>
        <Button text="Emit coins" to="/farms" />
        <StyledParallaxBottom>
          <Parallax path={bitcoinTree} id="center" depth={0.5}></Parallax>
        </StyledParallaxBottom>
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
const StyledParallaxCenter = styled.div`
position: absolute;
right: 30%;
top: 40%;
img {
  width: 46px;
  height: 46px;
}
`

const StyledParallaxBottom = styled.div`
position: absolute;
left: 65%;
top: 70%;
img {
  width: 137px;
  height: 137px;
}
`
const StyledParallaxBottomFirst = styled.div`
position: absolute;
left: 25%;
top: 60%;
img {
  width: 77px;
  height: 77px;
}
`


export default Home
