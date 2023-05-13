import type { InputHTMLAttributes } from "react";

import frFlag from "~/assets/icons/flags/fr.svg";

import baseStyles from "./BaseInput.module.css";
import styles from "./PhoneInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function PhoneInput({
  label = "Téléphone",
  disabled,
  className,
  ...props
}: Props) {
  const classes = [baseStyles.input, styles.phoneInput, className]
    .filter((c) => !!c)
    .join(" ");

  return (
    <label className={classes} aria-disabled={disabled}>
      <select>
        <option
          value="fr"
          selected
          style={{ backgroundImage: `url(${frFlag})` }}
        >
          &nbsp;
        </option>
      </select>

      <input type="phone" disabled={disabled} {...props} placeholder=" " />
      <span>{label}</span>
    </label>
  );
}
