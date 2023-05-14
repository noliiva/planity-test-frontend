import { useState } from "react";

import Button from "~/design-system/Button";

import { RDVProvider } from "./RDVContext";
import Client from "./Client";
import BookingDate from "./BookingDate";
import Presta from "./Presta";
import Footer from "./Footer";

import { ReactComponent as ArrowBackIcon } from "~/assets/icons/arrow_back.svg";
import { ReactComponent as CheckIcon } from "~/assets/icons/check.svg";
import { ReactComponent as DescriptionIcon } from "~/assets/icons/description.svg";
import { ReactComponent as AddCircleIcon } from "~/assets/icons/add_circle.svg";
import { ReactComponent as EditIcon } from "~/assets/icons/edit.svg";

import styles from "./index.module.css";

function BoxRDV() {
  const [prestaList, setPrestaList] = useState([Date.now()]);

  const handleAddPresta = () => {
    setPrestaList((list) => list.concat(Date.now()));
  };
  const handleRemovePresta = (key: number) => {
    setPrestaList((list) => list.filter((k) => k !== key));
  };

  return (
    <div className={styles.box}>
      <header className={styles.boxHeader}>
        <h1>Rendez-vous</h1>

        <Button>
          <ArrowBackIcon />
        </Button>

        <Button primary>
          <CheckIcon />
        </Button>
      </header>

      <form className={styles.boxContent}>
        <Client />

        <BookingDate />

        {prestaList.map((key) => (
          <Presta
            key={key}
            onDelete={
              (prestaList.length > 1 || undefined) &&
              (() => handleRemovePresta(key))
            }
          />
        ))}

        <Button
          icon={<AddCircleIcon />}
          xlarge
          dashed
          onClick={handleAddPresta}
        >
          Ajouter une prestation à la suite
        </Button>

        <div className={styles.additionalActions}>
          <Button link icon={<DescriptionIcon />}>
            Ajouter un titre
          </Button>

          <Button link icon={<EditIcon />}>
            Ajouter une note
          </Button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default function BoxRDVWithContext() {
  return (
    <RDVProvider>
      <BoxRDV />
    </RDVProvider>
  );
}
