import React from "react"
import { ButtonProps } from "./Button.types"
import { ButtonStyled } from "./Button.styled"

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, className, disabled, ...rest } = props
  return (
    <ButtonStyled {...rest} disabled={disabled} className={`Button-root ${className} ${variant}`}>
      {props.children}
    </ButtonStyled>
  )
}

export default Button

Button.defaultProps = {
  variant: "primary",
  disabled: false
}
