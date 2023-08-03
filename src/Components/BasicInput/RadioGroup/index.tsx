/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import { RadioGroupStyled } from "./RadioGroup.styled";
import { RadioProps } from "../Radio/Radio.types";

const RadioGroup = React.forwardRef<Partial<HTMLLabelElement>, RadioGroupProps>((props, ref) => {
  const { onChange, value, error, disabled, ...rest } = props
  const internalRef = React.useRef<HTMLDivElement | null>(null)
  const currRef = React.useMemo(() => ref || internalRef, [ref, internalRef]) as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    if (currRef.current) {
      const radios = currRef.current.getElementsByClassName("Radio-input") as HTMLCollectionOf<HTMLInputElement>
      for (let i = 0; i < radios.length; i++) {
        const nativeInputValueSetter = Object?.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'checked')?.set;
        nativeInputValueSetter?.call(radios[i], radios[i].value === props.value);
      }
    }
  }, [props.value, currRef.current])

  React.useEffect(() => {
    if (currRef.current) {
      const radios = currRef.current?.getElementsByClassName("Radio-input") as HTMLCollectionOf<HTMLInputElement>
      for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", () => {
          if (radios[i].checked) props.onChange!(radios[i].value)
        });
      }
    }
  }, [currRef.current])

  type RadioType = React.DetailedHTMLProps<RadioProps, HTMLDivElement>

  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement<RadioType>(child)) {
        return child
      }
      return React.cloneElement<RadioType>(child, {
        disabled: props.disabled || child.props.disabled
      });
    });
  };

  return (
    <RadioGroupStyled {...rest} $error={!!error} $disabled={!!disabled} ref={currRef} className={`RadioGroup-root ${props.className}`}>
      <div className="RadioGroup-radioWrapper">
        {renderChildren()}
      </div>
    </RadioGroupStyled>
  )
})

RadioGroup.defaultProps = {
  onChange: () => { },
  className: "",
  error: false,
  disabled: false
};

export default RadioGroup;