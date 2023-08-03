import React from "react"

type Identity<T> = { [P in keyof T]: T[P] }
type Replace<T, K extends keyof T, TReplace> = Identity<Pick<T, Exclude<keyof T, K>> & {
  [P in K]: TReplace
}>

type ReplaceOnChange = Replace<React.InputHTMLAttributes<HTMLDivElement>, "onChange", (value: string | number) => void>

export type RadioGroupProps = Partial<ReplaceOnChange> & {
  label?: string;
  value?: string | number;
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  disabled?: boolean;
}
