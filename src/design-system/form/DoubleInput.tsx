import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./DoubleInput.module.css";

type Props = Without<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  names: [string, string];
  defaultValues?: [string, string];
};

export default function DoubleInput({
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
          disabled={disabled}
          defaultValue={defaultValues?.[0]}
          {...props}
          name={names[0]}
        />
      </label>

      <label>
        <input
          type="text"
          disabled={disabled}
          defaultValue={defaultValues?.[1]}
          {...props}
          name={names[1]}
        />
      </label>
    </div>
  );
}
