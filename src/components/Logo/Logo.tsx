import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/left-logo.svg'
import right from '../../assets/img/right-logo.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledLeftLogo>
        <img height="100%" src={chef} />
      </StyledLeftLogo>
      <StyledRightLogo>
        <img src={right} />
      </StyledRightLogo>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: 100%;
`
const StyledLeftLogo = styled.div`
  margin-right: 20px;
  width: 44px;
  height: 44px;
  @media (max-width: 991px) {
    margin-right: 0px;
  }
`
const StyledRightLogo = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`

export default Logo
