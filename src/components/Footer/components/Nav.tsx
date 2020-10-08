import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
        <StyledLink
            target="_blank"
            href="https://etherscan.io/address/0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6#code"
        >
            UnFederalReserveToken
        </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xF8377270af0c864d2b3BAB73BB16c65b05767549#code"
      >
        MasterUnChairman Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0x7ba9b94127d434182287de708643932ec036d365"
      >
        Uniswap eRSDL-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/fN3NceM">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/ResidualToken/unfederalreserve-merchantlobby">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/Unfederalreser1">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

const StyledLink = styled.a`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme.color.white};
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
  @media (max-width: 991px) {
    padding-bottom: 15px;
  }
`

export default Nav
