import React from "react";
import { RadioStyled } from "./Radio.styled";
import { RadioProps } from "./Radio.types";

const Radio = React.forwardRef<Partial<HTMLInputElement>, RadioProps>((props, ref) => {
  const { customCaption, className, disabled, ...rest } = props
  const internalRef = React.useRef<HTMLInputElement | null>(null)
  const currRef = React.useMemo(() => ref || internalRef, [ref, internalRef]) as React.MutableRefObject<HTMLInputElement>;

  return (
    <RadioStyled className={`Radio-root ${className}`} $disabled={disabled}>
      <input {...rest} ref={currRef} className="Radio-input" type="radio" />
      <div className="Radio-radio" />
      {!customCaption && props.label && (
        <p className="Radio-label">{props.label}</p>
      )}
      {customCaption}
    </RadioStyled>
  )
})

Radio.defaultProps = {
  disabled: false,
  customCaption: undefined,
  className: ""
};

export default Radio;