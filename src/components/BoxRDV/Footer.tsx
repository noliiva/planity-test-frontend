import { useState } from "react";

import Button from "~/design-system/Button";
import { useRDVContext } from "./RDVContext";

import { ReactComponent as CopyIcon } from "~/assets/icons/content_copy.svg";
import { ReactComponent as CutIcon } from "~/assets/icons/content_cut.svg";
import { ReactComponent as DeleteFilledIcon } from "~/assets/icons/delete_filled.svg";

import styles from "./Footer.module.css";

export default function Footer() {
  const { client } = useRDVContext();

  const [chosen, setChosen] = useState(false);
  const [showUp, setShowUp] = useState<boolean | undefined>();

  return (
    <footer className={styles.footer}>
      <div>
        <Button
          link={!chosen}
          primary={chosen}
          onClick={() => setChosen((v) => !v)}
        >
          Choisi(e)
        </Button>

        <Button
          link={!showUp}
          secondary={showUp}
          onClick={() => setShowUp(true)}
        >
          Venu
        </Button>

        <Button
          link={showUp || showUp === undefined}
          danger={showUp === false}
          onClick={() => setShowUp(false)}
        >
          Pas venu
        </Button>
      </div>

      {client && (
        <>
          <hr />

          <div>
            <Button link icon={<CopyIcon />}>
              Copier
            </Button>

            <Button link icon={<CutIcon />}>
              Couper
            </Button>

            <Button link icon={<DeleteFilledIcon />}>
              Supprimer
            </Button>
          </div>

          <div>
            <Button xlarge>Plus d'options (produits, remises, ...)</Button>

            <Button primary xlarge>
              Encaisser 30,00 €
            </Button>
          </div>
        </>
      )}
    </footer>
  );
}
