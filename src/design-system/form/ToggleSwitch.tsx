import type { InputHTMLAttributes } from "react";

import styles from "./ToggleSwitch.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function ToggleSwitch({
  disabled,
  className,
  label,
  ...props
}: Props) {
  const classes = [styles.toggleSwitch, className].filter((c) => !!c).join(" ");

  return (
    <label className={classes} aria-disabled={disabled}>
      <input type="checkbox" disabled={disabled} {...props} />
      <span>{label}</span>
    </label>
  );
}
