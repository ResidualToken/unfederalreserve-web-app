import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: ${(props) => props.theme.color.blue[500]};
  border: 1px solid ${(props) => props.theme.color.blue[600]};
  border-radius: 1px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
