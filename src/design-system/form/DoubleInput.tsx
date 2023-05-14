import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./DoubleInput.module.css";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type Props = Without<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  names: [string, string];
  defaultValues?: [string, string];
};

export default function DoubleInput({
  name,
  names,
  disabled,
  defaultValues,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, styles.doubleInput, className]
    .filter((c) => !!c)
    .join(" ");

  return (
    <div className={classes} aria-disabled={disabled}>
      <label>
        <input
          type="text"
          name={names[0]}
          disabled={disabled}
          defaultValue={defaultValues?.[0]}
          {...props}
        />
      </label>

      <label>
        <input
          type="text"
          name={names[1]}
          disabled={disabled}
          defaultValue={defaultValues?.[1]}
          {...props}
        />
      </label>
    </div>
  );
}
