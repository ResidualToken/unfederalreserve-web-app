import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import central from '../../assets/img/circle-cropped.png'
import rectangle from '../../assets/img/rectangle-2.svg'

interface PageHeaderProps {
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ subtitle, title }) => {
  return (
    <Container>
      <StyledPageHeader>
        <CentralLogo>
          <img src={central} />
        </CentralLogo>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 40px;
  position: relative;
  z-index: 0;
`
const CentralLogo = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    width: 90px;
    height: 90px;
  }
  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    width: 600px;
    height: 400px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${rectangle});
    z-index: -1;
    animation: 1.5s infinite alternate drawArc;
    @media (max-width: 991px) {
      display: none;
    }
  }
  @keyframes drawArc {
    0% { transform: rotate(55deg) translateX(-91px) translateY(30px);}
    5% { transform: rotate(55deg) translateX(-91px) translateY(30px);}
    10% { transform: rotate(50deg) translateX(-76px) translateY(22px);}
    15% { transform: rotate(45deg) translateX(-59px) translateY(15px);}
    20% { transform: rotate(40deg) translateX(-43px) translateY(9px);}
    25% { transform: rotate(35deg) translateX(-27px) translateY(3px);}
    30% { transform: rotate(30deg) translateX(-10px) translateY(0px);}
    35% { transform: rotate(25deg) translateX(8px) translateY(-3px);}
    40% { transform: rotate(20deg) translateX(26px) translateY(-3px);}
    45% { transform: rotate(15deg) translateX(44px) translateY(-2px);}
    50% { transform: rotate(10deg) translateX(61px) translateY(2px);}

    55% { transform: rotate(10deg) translateX(61px) translateY(2px);}

    60% { transform: rotate(5deg) translateX(79px) translateY(7px);}
    65% { transform: rotate(-10deg) translateX(125px) translateY(26px);}

    70% { transform: rotate(-15deg) translateX(140px) translateY(36px);}
    75% { transform: rotate(-20deg) translateX(154px) translateY(47px);}
    80% { transform: rotate(-25deg) translateX(167px) translateY(59px);}
    85% { transform: rotate(-30deg) translateX(177px) translateY(73px);}
    90% { transform: rotate(-35deg) translateX(189px) translateY(87px);}
    95% { transform: rotate(-40deg) translateX(196px) translateY(103px);}
    96%{ transform: rotate(-45deg) translateX(205px) translateY(119px);}
    97%{ transform: rotate(-45deg) translateX(205px) translateY(119px);}
    98%{ transform: rotate(-45deg) translateX(205px) translateY(119px);}
    100%{ transform: rotate(-45deg) translateX(205px) translateY(119px);}
  }
`

const StyledTitle = styled.h1`
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  color: ${(props) => props.theme.color.white};
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 36px;
    text-align: center;
  }
`

const StyledSubtitle = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  color: ${(props) => props.theme.color.white};
  opacity: 0.7;
  width: 100%;
  max-width: 486px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
`

export default PageHeader
