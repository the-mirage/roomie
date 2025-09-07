export interface ButtonProps {
  variants: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
