import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  suffix?: string;
};

export default function TextInput({
  type = "text",
  label,
  suffix,
  disabled,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, className].filter((c) => !!c).join(" ");

  const input = (
    <input type={type} disabled={disabled} {...props} placeholder=" " />
  );

  return (
    <label className={classes} aria-disabled={disabled}>
      {label ? (
        <span className={baseStyles.inputInnerContainer}>
          {input}
          <span>{label}</span>
        </span>
      ) : (
        input
      )}

      {suffix && <span className={baseStyles.inputSuffix}>{suffix}</span>}
    </label>
  );
}
