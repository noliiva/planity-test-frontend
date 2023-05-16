import { ChangeEvent, useState } from "react";

import Button from "~/design-system/Button";
import Icon from "~/design-system/Icon";
import AutoComplete from "~/design-system/form/AutoComplete";
import DoubleInput from "~/design-system/form/DoubleInput";
import PhoneInput from "~/design-system/form/PhoneInput";
import TextInput from "~/design-system/form/TextInput";
import ToggleSwitch from "~/design-system/form/ToggleSwitch";
import RadioGroup from "~/design-system/form/RadioGroup";

import { useRDVContext } from "./RDVContext";

import { ReactComponent as DeleteIcon } from "~/assets/icons/delete.svg";
import { ReactComponent as AccountCircleIcon } from "~/assets/icons/account_circle.svg";
import { ReactComponent as InfoIcon } from "~/assets/icons/info.svg";
import { ReactComponent as CopyIcon } from "~/assets/icons/content_copy.svg";
import { ReactComponent as PersonIcon } from "~/assets/icons/person.svg";
import { ReactComponent as CakeIcon } from "~/assets/icons/cake.svg";
import { ReactComponent as CardMembershipIcon } from "~/assets/icons/card_membership.svg";

import parentStyles from "./index.module.css";
import styles from "./Client.module.css";

export default function Client() {
  const { client: defaultValue, handleClientChange } = useRDVContext();

  const [resetKey, setResetKey] = useState(Date.now());
  const [client, setClient] = useState(defaultValue);
  const [infoInputVisible, setInfoInputVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setClient(value);
    handleClientChange(value);
  };

  const handleReset = () => {
    setResetKey(Date.now());
    setClient("");
    handleClientChange("");
  };

  return (
    <fieldset key={resetKey} className={parentStyles.boxContentRow}>
      <legend className="visuallyHidden">Client</legend>

      <Icon className={styles.sectionIcon}>
        <AccountCircleIcon />
      </Icon>

      <div className={styles.container}>
        <div className={styles.baseInfoContainer}>
          <AutoComplete
            label="Choisir un client"
            name="client"
            onChange={handleChange}
          >
            {client && (
              <Button primary xsmall>
                Créer
              </Button>
            )}
          </AutoComplete>

          <PhoneInput name="phone" disabled={!client} />

          <TextInput
            type="email"
            label="Email"
            name="email"
            disabled={!client}
          />

          {client && (
            <Button large onClick={handleReset}>
              <DeleteIcon />
            </Button>
          )}
        </div>

        {client && (
          <>
            <div className={parentStyles.boxContentRow}>
              <Icon small className={styles.icon}>
                <PersonIcon />
              </Icon>

              <RadioGroup
                name="gender"
                options={[
                  { value: "man", label: "Homme" },
                  { value: "woman", label: "Femme" },
                  { value: "child", label: "Enfant" },
                ]}
              />

              <Icon small className={styles.icon}>
                <CakeIcon />
              </Icon>

              <DoubleInput
                names={["birthDay", "birthMonth"]}
                defaultValues={["20", "Sept"]}
                className={styles.birthDateInput}
              />

              <ToggleSwitch label="SMS de rappel" defaultChecked />

              <ToggleSwitch label="SMS marketing" />
            </div>

            <div className={parentStyles.boxContentRow}>
              <Icon small className={styles.icon}>
                <InfoIcon />
              </Icon>

              {infoInputVisible ? (
                <TextInput
                  label="Info client"
                  name="info"
                  className={styles.infoInput}
                />
              ) : (
                <Button link onClick={() => setInfoInputVisible(true)}>
                  Info client
                </Button>
              )}
            </div>

            <div className={parentStyles.boxContentRow}>
              <Icon small className={styles.icon}>
                <CardMembershipIcon />
              </Icon>

              <span className={styles.text}>
                <em>Carte fidélité</em>&nbsp;: Points&nbsp;: 42 - Gains&nbsp;:
                10,00€ (+)
              </span>

              <Icon small className={styles.icon}>
                <CopyIcon />
              </Icon>

              <span className={styles.text}>
                <em>Forfait brushing par 5 - cheveux courts</em> (4)
              </span>
            </div>
          </>
        )}
      </div>
    </fieldset>
  );
}
