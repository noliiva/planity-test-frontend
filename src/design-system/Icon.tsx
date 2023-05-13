import React from "react";
import type { ReactElement, SVGProps } from "react";

import styles from "./Icon.module.css";

type CustomProps = {
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  children: ReactElement;
};
type Props = SVGProps<SVGElement> & CustomProps;

export default function Icon({
  xsmall,
  small,
  medium,
  large,
  className,
  children,
  ...props
}: Props) {
  const size =
    (xsmall && "iconXSmall") ||
    (small && "iconSmall") ||
    (medium && "iconMedium") ||
    (large && "iconLarge");

  const classes = [styles.icon, styles[size || "iconMedium"], className]
    .filter((c) => !!c)
    .join(" ");

  return React.cloneElement(children, { className: classes, ...props });
}
