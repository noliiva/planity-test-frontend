import { useRef, useState, useEffect } from "react";
import type { InputHTMLAttributes, ChangeEvent } from "react";

import { ReactComponent as DropdownArrowIcon } from "~/assets/icons/arrow_drop_down.svg";
import frFlag from "~/assets/icons/flags/fr.svg";
import beFlag from "~/assets/icons/flags/be.svg";

import baseStyles from "./BaseInput.module.css";
import styles from "./PhoneInput.module.css";

type PhoneCode = {
  key: string;
  code: string;
  img: string;
};
const phoneCodes: PhoneCode[] = [
  { key: "BE", code: "+32", img: beFlag },
  { key: "FR", code: "+33", img: frFlag },
];

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function PhoneInput({
  label = "Téléphone",
  disabled,
  className,
  ...props
}: Props) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [currentPhoneCode, setCurrentPhoneCode] = useState({
    key: "FR",
    code: "+33",
    img: frFlag,
  });

  const classes = [baseStyles.input, styles.phoneInput, className]
    .filter((c) => !!c)
    .join(" ");

  useEffect(() => {
    if (disabled) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        ref.current.open = false;
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [disabled]);

  const handlePhoneCodeChange = (phoneCode: PhoneCode) => {
    if (disabled) return;

    setCurrentPhoneCode(phoneCode);
    if (ref.current) ref.current.open = false;
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const cleaned = (e.target.value || "").replace(/\D/g, "");
    e.target.value = [
      cleaned.slice(0, 2),
      cleaned.slice(2, 4),
      cleaned.slice(4, 6),
      cleaned.slice(6, 8),
      cleaned.slice(8, 10),
    ]
      .filter((v) => !!v)
      .join(" ");
  };

  return (
    <div className={classes} aria-disabled={disabled}>
      <details ref={ref} className={styles.phoneCodeSelector}>
        <summary>
          <img src={currentPhoneCode.img} alt={currentPhoneCode.key} />{" "}
          <DropdownArrowIcon />
        </summary>

        <fieldset>
          <legend>Indicatif téléphonique</legend>

          {phoneCodes.map((phoneCode) => (
            <label key={phoneCode.key}>
              <input
                className="visuallyHidden"
                name="countryCode"
                type="radio"
                value={phoneCode.key}
                defaultChecked={currentPhoneCode.key === phoneCode.key}
                onChange={() => handlePhoneCodeChange(phoneCode)}
              />
              <img src={phoneCode.img} alt="BE" /> {phoneCode.code}
            </label>
          ))}
        </fieldset>
      </details>

      <label className={baseStyles.inputInnerContainer}>
        <input
          type="phone"
          disabled={disabled}
          {...props}
          placeholder=" "
          onInput={handleInput}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
