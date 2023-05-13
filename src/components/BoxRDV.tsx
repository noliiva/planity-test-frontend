import Button from "~/design-system/Button";
import Icon from "~/design-system/Icon";
import TextInput from "~/design-system/form/TextInput";
import Select from "~/design-system/form/Select";
import AutoCompleteInput from "~/design-system/form/AutoCompleteInput";
import PhoneInput from "~/design-system/form/PhoneInput";

import { ReactComponent as ArrowBackIcon } from "~/assets/icons/arrow_back.svg";
import { ReactComponent as CheckIcon } from "~/assets/icons/check.svg";
import { ReactComponent as AccountCircleIcon } from "~/assets/icons/account_circle.svg";
import { ReactComponent as CalendarIcon } from "~/assets/icons/calendar_today.svg";
import { ReactComponent as SyncIcon } from "~/assets/icons/sync.svg";
import { ReactComponent as DescriptionIcon } from "~/assets/icons/description.svg";
import { ReactComponent as AddCircleIcon } from "~/assets/icons/add_circle.svg";
import { ReactComponent as EditIcon } from "~/assets/icons/edit.svg";
import { ReactComponent as CopyIcon } from "~/assets/icons/content_copy.svg";
import { ReactComponent as CutIcon } from "~/assets/icons/content_cut.svg";
import { ReactComponent as DeleteFilledIcon } from "~/assets/icons/delete_filled.svg";

import styles from "./BoxRDV.module.css";

function BoxRDV() {
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
        <fieldset className={styles.clientFieldset}>
          <legend>Client</legend>

          <Icon>
            <AccountCircleIcon />
          </Icon>

          <AutoCompleteInput label="Choisir un client" name="client" />

          <PhoneInput name="phone" />

          <TextInput label="Email" name="email" disabled />
        </fieldset>

        <fieldset className={styles.dateFieldset}>
          <legend>Date</legend>

          <Icon>
            <CalendarIcon />
          </Icon>

          <TextInput name="date" defaultValue="Lundi 21 mars" />

          <span>de</span>

          <TextInput name="startHour" defaultValue="14" />
          <TextInput name="startMin" defaultValue="30" />

          <span>à</span>

          <TextInput name="endHour" defaultValue="15" />
          <TextInput name="endMin" defaultValue="30" />

          <span>
            <strong>(1h)</strong>
          </span>

          <label>
            <input type="checkbox" />
            <span>Jour entier</span>
          </label>

          <Button primary link icon={<SyncIcon />}>
            Répéter
          </Button>
        </fieldset>

        <fieldset className={styles.prestaFieldset}>
          <legend>Prestation</legend>

          <Icon>
            <DescriptionIcon />
          </Icon>

          <Select
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
          />

          <Select
            secondary
            placeholder="Choisir un collaborateur"
            label="Avec"
            options={[{ value: "1", label: "Jean-Michel" }]}
          />
        </fieldset>

        <Button icon={<AddCircleIcon />} xlarge dashed>
          Ajouter une prestation à la suite
        </Button>

        <div className={styles.additionnalActions}>
          <Button link icon={<DescriptionIcon />}>
            Ajouter un titre
          </Button>

          <Button link icon={<EditIcon />}>
            Ajouter une note
          </Button>
        </div>
      </form>

      <footer className={styles.boxFooter}>
        <div>
          <Button link>Choisi(e)</Button>
          <Button link>Venu</Button>
          <Button link>Pas venu</Button>
        </div>

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
      </footer>
    </div>
  );
}

export default BoxRDV;
