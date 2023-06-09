import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

import { format, parse } from "date-fns";
import { fr } from "date-fns/locale";

import type { InputHTMLAttributes } from "react";

import baseStyles from "./BaseInput.module.css";
import styles from "./DatePicker.module.css";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value"
> & {
  defaultValue?: Date;
  value?: Date;
};

const inputDateFormat = "yyyy-MM-dd";
const formatDate = (date: Date) => format(date, "EEEE dd MMMM", { locale: fr });

export default function DatePicker({
  disabled,
  className,
  onChange,
  value,
  defaultValue = new Date(),
  ...props
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const classes = [baseStyles.input, styles.datePicker, className]
    .filter((c) => !!c)
    .join(" ");

  const [formatedDate, setFormatedDate] = useState(
    formatDate(value ?? defaultValue)
  );

  const handleClick = () => {
    if (disabled) return;

    if (ref.current) {
      ref.current.showPicker();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    const { value } = e.target;

    if (!value) {
      setFormatedDate("");
      return;
    }

    const date = parse(value, inputDateFormat, new Date());
    setFormatedDate(formatDate(date));
  };

  return (
    <label className={classes} aria-disabled={disabled} onClick={handleClick}>
      <span>{formatedDate}</span>
      <input
        ref={ref}
        className="visuallyHidden"
        type="date"
        disabled={disabled}
        onInput={handleChange}
        min={format(defaultValue, inputDateFormat)}
        defaultValue={defaultValue && format(defaultValue, inputDateFormat)}
        value={value && format(value, inputDateFormat)}
        {...props}
      />
    </label>
  );
}
