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
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
