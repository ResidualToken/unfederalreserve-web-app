import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Menu
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/staking">
          Merchant Bank Lobby
      </StyledLink>
      <StyledAbsoluteLink
        href="https://www.unfederalreserve.com/"
        target="_blank"
      >
        About
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 767px) {
    width: 100%;
    flex-shrink: 0;
    order: 3;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.white};
  opacity: 0.2;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 640px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.white};
  opacity: 0.2;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 640px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
