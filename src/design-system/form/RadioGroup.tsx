import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./RadioGroup.module.css";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type Props = Without<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  name: string;
  options: { value: string; label: string }[];
  defautValue?: string;
};

export default function RadioGroup({
  disabled,
  options,
  defautValue,
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
            type="radio"
            value={value}
            disabled={disabled}
            defaultChecked={defautValue === value || index === 0}
            {...props}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
