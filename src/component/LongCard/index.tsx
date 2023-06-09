import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import nameFormatting from "@/utils/formatting";
import { IconButton } from "@mui/material";
import s from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "../FavoriteIcon";
import GotIcon from "../GotIcon";
// import { Digimon } from "../../utils/types";

interface CardProps {
  digimon: Digimon;
}

interface Digimon {
  id: number;
  name: string;
  evolveFrom: number[];
  evolveTo: number[];
  attribute: string;
  element: string;
  level: number;
  unreleased: boolean;
  jogress: boolean;
  xEvolution: boolean;
}

export default function LongCard({ digimon }: CardProps) {
  function backgroundColorByLevel(level: number) {
    switch (level) {
      case 3:
        return "blue";
      case 4:
        return "red";
      case 5:
        return "yellow";
      case 6:
        return "purple";
      case 7:
        return "gray";
      default:
        return "white";
    }
  }

  function fixXAxis(id: number) {
    switch (id) {
      case 1:
        return "40%";
      case 101:
        return "20%";
      case 208:
        return "20%";
      case 266:
        return "10%";
      case 329:
        return "0%";
      case 356:
        return "10%";
      case 34:
        return "10%";
      case 234:
        return "0%";
      case 2:
        return "40%";
      case 165:
        return "0%";
      case 302:
        return "-20%";
      case 123:
        return "70%";
      case 330:
        return "20%";
      case 209:
        return "-10%";
      case 190:
        return "28%";
      case 48:
        return "70%";
      case 70:
        return "30%";
      case 220:
        return "17%";
      case 134:
        return "10%";
      case 203:
        return "80%";
      case 146:
        return "20%";
      case 176:
        return "-20%";
      case 268:
        return "30%";
      case 292:
        return "60%";
      case 296:
        return "-70%";
      case 3:
        return "0%";
      case 21:
        return "-10%";
      case 75:
        return "20%";
      case 107:
        return "10%";
      case 191:
        return "70%";
      case 377:
        return "60%";
      case 215:
        return "10%";
      case 357:
        return "40%";
      case 250:
        return "0%";
      case 257:
        return "0%";
      case 85:
        return "40%";
      case 139:
        return "40%";
      case 331:
        return "110%";
      case 210:
        return "20%";
      case 388:
        return "10%";
      case 384:
        return "10%";
      case 112:
        return "70%";
      case 152:
        return "20%";
      case 124:
        return "30%";
      case 342:
        return "-40%";
      case 311:
        return "40%";
      case 103:
        return "10%";
      case 246:
        return "40%";
      case 224:
        return "0%";
      case 11:
        return "10%";
      case 363:
        return "0%";
      case 95:
        return "80%";
      case 164:
        return "70%";
      //   case 70:
      //     return "30%";
      //   case 220:
      //     return "17%";
      //   case 134:
      //     return "10%";
      //   case 203:
      //     return "80%";
      //   case 146:
      //     return "20%";
      //   case 176:
      //     return "-20%";
      //   case 268:
      //     return "30%";
      //   case 292:
      //     return "60%";
      //   case 296:
      //     return "-70%";
      //   case 3:
      //     return "0%";
      //   case 21:
      //     return "-10%";
      //   case 75:
      //     return "20%";
      //   case 107:
      //     return "10%";
      //   case 191:
      //     return "70%";
      //   case 377:
      //     return "60%";
      //   case 215:
      //     return "10%";
      //   case 357:
      //     return "40%";
      //   case 250:
      //     return "0%";
      //   case 257:
      //     return "0%";
      //   case 85:
      //     return "40%";
      //   case 139:
      //     return "40%";
      default:
        return "50%";
    }
  }

  return (
    <div className={styles.container} id={`${digimon.id}-container`}>
      <div className={styles.overlayContainer}>
        <GotIcon />
        <FavoriteIcon />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={`/${digimon.id}.png`}
          alt={digimon.name}
          style={{
            objectPosition: fixXAxis(digimon.id),
            filter: digimon.unreleased ? "grayscale(100%)" : undefined,
          }}
        />
      </div>
      <div className={styles.nameContainer}>
        <span>{digimon.id}</span>
      </div>
    </div>
  );
}
