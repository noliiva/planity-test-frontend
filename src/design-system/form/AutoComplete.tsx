import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function AutoComplete({
  label,
  className,
  children,
  ...props
}: Props) {
  const classes = [baseStyles.input, className].filter((c) => !!c).join(" ");

  return (
    <label className={classes}>
      <span className={baseStyles.inputInnerContainer}>
        <input type="text" {...props} placeholder=" " />
        <span>{label}</span>
      </span>

      {children}
    </label>
  );
}
