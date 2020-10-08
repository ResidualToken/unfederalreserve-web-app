import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import central from '../../assets/img/favicon.png'
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
`
const CentralLogo = styled.div`
  display: flex;
  margin-bottom: 20px;
  // :before {
    // content: '';
    // position: absolute;
    // left: 0;
    // top: 40px;
    // width: 600px;
    // height: 400px;
    // background-size: 100%;
    // background-repeat: no-repeat;
    // background-image: url(${rectangle});
    // z-index: -1;
    // animation: 1s infinite alternate drawArc;
  // }
  @keyframes drawArc {
    0% { transform: rotate(55deg) translateX(-91px) translateY(30px);}
    10% { transform: rotate(45deg) translateX(-61px) translateY(14px);}
    20% { transform: rotate(35deg) translateX(-29px) translateY(3px);}
    30% { transform: rotate(25deg) translateX(6px) translateY(-1px);}
    40% { transform: rotate(15deg) translateX(41px) translateY(-1px);}
    50% { transform: rotate(5deg) translateX(76px) translateY(4px);}
    60% { transform: rotate(-10deg) translateX(125px) translateY(26px);}
    70% { transform: rotate(-25deg) translateX(166px) translateY(58px);}
    80% { transform: rotate(-35deg) translateX(187px) translateY(87px);}
    90% { transform: rotate(-45deg) translateX(203px) translateY(118px);}
    100%{ transform: rotate(-50deg) translateX(210px) translateY(134px);}
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
