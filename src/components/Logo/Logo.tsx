import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/left-logo.svg'
import right from '../../assets/img/right-logo.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledRightLogo>
        <img src={right} />
      </StyledRightLogo>
      <StyledLeftLogo>
        <img height="100%" src={chef} />
      </StyledLeftLogo>
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
  margin-left: 20px;
  width: 100%;
  @media (max-width: 991px) {
    margin-left: 0px;
  }
  
`
const StyledRightLogo = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`

export default Logo
