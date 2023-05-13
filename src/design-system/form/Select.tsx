import { useState } from "react";
import type { SelectHTMLAttributes, ChangeEvent } from "react";

import styles from "./Select.module.css";

type CustomProps = {
  label?: string;
  options: { value: string; label: string }[];
  primary?: boolean;
  secondary?: boolean;
};
type Props = SelectHTMLAttributes<HTMLSelectElement> & CustomProps;

export default function Select({
  label,
  placeholder,
  options,
  primary,
  secondary,
  onChange,
  className,
  ...props
}: Props) {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.selectedOptions[0].innerText);
    if (onChange) onChange(e);
  };

  const color =
    (primary && "selectPrimary") || (secondary && "selectSecondary");

  const classes = [styles.select, color && styles[color], className]
    .filter((c) => !!c)
    .join(" ");

  return (
    <label className={classes}>
      <select {...props} data-value={value} onChange={handleChange}>
        <option value="" hidden disabled selected>
          {placeholder}
        </option>
        {options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>

      <span>{label}</span>
      <output>{value || placeholder}</output>
    </label>
  );
}
