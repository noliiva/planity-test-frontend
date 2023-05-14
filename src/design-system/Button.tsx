import type {
  PropsWithChildren,
  ButtonHTMLAttributes,
  ReactElement,
} from "react";

import Icon from "~/design-system/Icon";

import styles from "./Button.module.css";

type CustomProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  dashed?: boolean;
  ghost?: boolean;
  link?: boolean;
  xsmall?: boolean;
  small?: boolean;
  large?: boolean;
  xlarge?: boolean;
  icon?: ReactElement;
};
type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> &
  CustomProps;

export default function Button({
  primary,
  secondary,
  danger,
  dashed,
  ghost,
  link,
  xsmall,
  small,
  large,
  xlarge,
  icon,
  type = "button",
  className,
  children,
  ...props
}: Props) {
  const color =
    (primary && "buttonPrimary") ||
    (secondary && "buttonSecondary") ||
    (danger && "buttonDanger");

  const shape =
    (ghost && "buttonGhost") ||
    (dashed && "buttonDashed") ||
    (link && "buttonLink");

  const size =
    !link &&
    ((xsmall && "buttonXSmall") ||
      (small && "buttonSmall") ||
      (large && "buttonLarge") ||
      (xlarge && "buttonXLarge"));

  const classes = [
    styles.button,
    color && styles[color],
    shape && styles[shape],
    size && styles[size],
    className,
  ]
    .filter((c) => !!c)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </button>
  );
}
