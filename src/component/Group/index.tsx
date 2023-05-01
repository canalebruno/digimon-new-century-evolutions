import { Digimon } from "../../utils/types";
import Card from "@/component/Card";
import styles from "./styles.module.scss";

interface GroupProps {
  name: string;
  list: Digimon[];
}

export default function Group({ name, list }: GroupProps) {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles.cardsContainer}>
        {list.map((digimon) => {
          return <Card digimon={digimon} />;
        })}
      </div>
    </div>
  );
}
