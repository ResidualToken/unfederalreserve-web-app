import React from 'react'
import styled from 'styled-components'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <StyledModalTitle>
    {text}
  </StyledModalTitle>
)

const StyledModalTitle = styled.div`
  align-items: center;
  color: ${props => props.theme.color.blue[500]};
  display: flex;
  font-size: 20px;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  margin-bottom: 15px;
`

export default ModalTitle