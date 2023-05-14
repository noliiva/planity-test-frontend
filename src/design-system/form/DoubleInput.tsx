import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./DoubleInput.module.css";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "name"
> & {
  names: [string, string];
  defaultValues?: [string, string];
  values?: [string, string];
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
          name={names[0]}
          {...props}
        />
      </label>

      <label>
        <input
          type="text"
          disabled={disabled}
          defaultValue={defaultValues?.[1]}
          name={names[1]}
          {...props}
        />
      </label>
    </div>
  );
}
