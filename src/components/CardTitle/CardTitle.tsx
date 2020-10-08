import React from 'react'
import styled from 'styled-components'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <StyledCardTitle>{text}</StyledCardTitle>
)

const StyledCardTitle = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  padding-top: 10px;
  padding-bottom: 25px;
  text-align: center;
`

export default CardTitle
