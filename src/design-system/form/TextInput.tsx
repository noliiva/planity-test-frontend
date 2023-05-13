import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function TextInput({
  label,
  type = "text",
  disabled,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, className].filter((c) => !!c).join(" ");

  return (
    <label className={classes} aria-disabled={disabled}>
      <input type={type} disabled={disabled} {...props} placeholder=" " />
      <span>{label}</span>
    </label>
  );
}
