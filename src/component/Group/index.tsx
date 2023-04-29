import { Digimon } from "../../utils/types";
import Card from "@/component/Card";
// import styles from "./styles.module.scss";

interface GroupProps {
  name: string;
  list: Digimon[];
}

export default function Group({ name, list }: GroupProps) {
  return (
    <div>
      <p>{name}</p>
      <div>
        {list.map((digimon) => {
          return <Card digimon={digimon} />;
        })}
      </div>
    </div>
  );
}
