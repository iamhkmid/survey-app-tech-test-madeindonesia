import React from "react";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string | number;
  description?: string | number;
  customCaption?: React.ReactElement | string | number;
  disabled?: boolean;
}
