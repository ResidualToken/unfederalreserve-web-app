import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 21px;
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
  padding-bottom: 0px;
  @media (max-width: 767px) {
    height: auto;
  }

`

export default Footer