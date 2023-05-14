import type { InputHTMLAttributes } from "react";

import styles from "./Checkbox.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function Checkbox({
  disabled,
  className,
  label,
  ...props
}: Props) {
  const classes = [styles.checkbox, className].filter((c) => !!c).join(" ");

  return (
    <label className={classes} aria-disabled={disabled}>
      <input type="checkbox" disabled={disabled} {...props} />
      <span>{label}</span>
    </label>
  );
}
