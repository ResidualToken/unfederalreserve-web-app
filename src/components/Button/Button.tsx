import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'

interface ButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  href?: string,
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary' | 'white'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
}) => {
  const { color, spacing } = useContext(ThemeContext)
  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  let backgroundColor: string
  let borderColor: string
  let buttonColor: string
  switch (variant) {
    case 'secondary':
      buttonColor = color.grey[500]
      break
    case 'white':
      buttonColor = color.white
      backgroundColor = 'transparent'
      borderColor = color.white
      break
    case 'default':
    default:
      buttonColor = color.blue[800]
  }
  switch (size) {
    case 'sm':
      buttonPadding = spacing[3]
      buttonSize = 37
      fontSize = 13
      buttonPadding = 22
      break
    case 'lg':
      boxShadow = `6px 6px 12px ${color.grey[300]},
        -12px -12px 24px ${color.grey[100]}ff;`
      buttonPadding = spacing[4]
      buttonSize = 72
      fontSize = 16
      break
    case 'md':
    default:
      buttonPadding = 50
      buttonSize = 56
      backgroundColor = color.yellow
      borderColor = color.yellow
      fontSize = 17
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{text}</StyledExternalLink>
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <StyledButton
      boxShadow={boxShadow}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      backgroundColor={backgroundColor}
      size={buttonSize}
      borderColor={borderColor}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  boxShadow: string,
  color: string,
  disabled?: boolean,
  fontSize: number,
  padding: number,
  size: number
  backgroundColor: string,
  borderColor: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: normal;
  align-items: center;
  border: solid 1px ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  box-shadow: ${props => props.boxShadow};
  color: ${props => !props.disabled ? props.color : props.color};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  height: ${props => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
  &:disabled {
    opacity: 0.6;
  }
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default Button