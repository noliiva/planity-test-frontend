import { useState } from "react";
import type { ChangeEvent } from "react";

import Button from "~/design-system/Button";
import Icon from "~/design-system/Icon";
import Select from "~/design-system/form/Select";
import TextInput from "~/design-system/form/TextInput";

import { ReactComponent as DeleteIcon } from "~/assets/icons/delete.svg";
import { ReactComponent as DescriptionIcon } from "~/assets/icons/description.svg";

import parentStyles from "./index.module.css";

type Props = {
  onDelete?: () => void;
};

const initialValues = {
  presta: "",
  employee: "",
  duration: "60",
  price: "60",
};

export default function Presta({ onDelete }: Props) {
  const [values, setValues] = useState(initialValues);
  const { presta, employee, duration, price } = values;
  const completed = presta && employee && duration && price;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleDelete = () => {
    setValues(initialValues);

    if (onDelete) onDelete();
  };

  return (
    <fieldset className={parentStyles.boxContentRow}>
      <legend>Prestation</legend>

      <Icon>
        <DescriptionIcon />
      </Icon>

      <div className={parentStyles.boxContentRow}>
        <Select
          name="presta"
          primary
          placeholder="Choisir une prestation"
          label="Prestation"
          options={[
            { value: "1", label: "Coupe homme (cheveux courts)" },
            {
              value: "2",
              label:
                "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux longs & épais)",
            },
          ]}
          value={presta}
          onChange={handleChange}
        />

        <Select
          name="employee"
          secondary
          placeholder="Choisir un collaborateur"
          label="Avec"
          options={[{ value: "1", label: "Jean-Michel" }]}
          value={employee}
          onChange={handleChange}
        />
      </div>

      <div
        className={parentStyles.boxContentRow}
        style={{ marginLeft: "auto" }}
      >
        <TextInput
          name="duration"
          suffix="Min"
          style={{ textAlign: "center", width: 51 }}
          value={duration}
          onChange={handleChange}
        />

        {presta && employee && duration && (
          <TextInput
            name="price"
            suffix="€"
            style={{ textAlign: "center", width: 51 }}
            value={price}
            onChange={handleChange}
          />
        )}

        {(onDelete || completed) && (
          <Button large onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        )}
      </div>
    </fieldset>
  );
}
