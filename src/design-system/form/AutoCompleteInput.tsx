import type { InputHTMLAttributes } from "react";

import Button from "~/design-system/Button";

import baseStyles from "./BaseInput.module.css";
import styles from "./AutoCompleteInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function AutoCompleteInput({
  label,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, styles.autoCompleteInput, className]
    .filter((c) => !!c)
    .join(" ");

  return (
    <label className={classes}>
      <input type="text" {...props} placeholder=" " />
      <span>{label}</span>

      <Button primary xsmall>
        Créer
      </Button>
    </label>
  );
}
