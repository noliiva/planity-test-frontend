import { useState } from "react";
import type { ChangeEvent } from "react";

import Button from "~/design-system/Button";
import Icon from "~/design-system/Icon";
import Checkbox from "~/design-system/form/Checkbox";
import DoubleInput from "~/design-system/form/DoubleInput";
import DatePicker from "~/design-system/form/DatePicker";

import { ReactComponent as CalendarIcon } from "~/assets/icons/calendar_today.svg";
import { ReactComponent as SyncIcon } from "~/assets/icons/sync.svg";

import parentStyles from "./index.module.css";
import styles from "./BookingDate.module.css";

export default function BookingDate() {
  const [isFullDay, setIsFullDay] = useState(false);

  return (
    <fieldset className={parentStyles.boxContentRow}>
      <legend className="visuallyHidden">Date du rendez-vous</legend>

      <Icon>
        <CalendarIcon />
      </Icon>

      <DatePicker name="date" className={styles.dateInput} />

      {!isFullDay && (
        <>
          <span>de</span>

          <DoubleInput
            className={styles.hourInput}
            names={["startHour", "startMin"]}
            defaultValues={["14", "30"]}
          />

          <span>à</span>

          <DoubleInput
            className={styles.hourInput}
            names={["endHour", "endMin"]}
            defaultValues={["15", "30"]}
          />

          <span>
            <strong>(1h)</strong>
          </span>
        </>
      )}

      <Checkbox
        label="Jour entier"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setIsFullDay(e.target.checked)
        }
      />

      <Button primary link icon={<SyncIcon />} className={styles.repeatButton}>
        Répéter
      </Button>
    </fieldset>
  );
}
