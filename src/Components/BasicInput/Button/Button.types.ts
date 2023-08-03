
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  variant?: "primary" | "secondary"
}