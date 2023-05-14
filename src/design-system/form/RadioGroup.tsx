import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./RadioGroup.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  options: { value: string; label: string }[];
};

export default function RadioGroup({
  disabled,
  options,
  defaultValue,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, styles.radioGroup, className]
    .filter((c) => !!c)
    .join(" ");

  return (
    <div className={classes} aria-disabled={disabled}>
      {options.map(({ value, label }, index) => (
        <label key={value}>
          <input
            className="visuallyHidden"
            type="radio"
            value={value}
            disabled={disabled}
            defaultChecked={defaultValue === value || index === 0}
            {...props}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
