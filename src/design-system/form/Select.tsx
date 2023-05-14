import { useState, useEffect } from "react";
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
  const color =
    (primary && "selectPrimary") || (secondary && "selectSecondary");

  const classes = [styles.select, color && styles[color], className]
    .filter((c) => !!c)
    .join(" ");

  const [value, setValue] = useState(props.value ?? props.defaultValue);
  const selectedOption = options.find(
    (o) => o.value === (props.value ?? value)
  );

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <label className={classes}>
      <select {...props} data-value={value} onChange={handleChange}>
        <option value="" hidden disabled>
          {placeholder}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <span>{label}</span>
      <output>{selectedOption?.label || placeholder}</output>
    </label>
  );
}
