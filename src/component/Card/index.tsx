import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// import { Digimon } from "../../utils/types";

interface CardProps {
  digimon: Digimon;
  evolutionChart?: boolean;
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

export default function Card({ digimon, evolutionChart = false }: CardProps) {
  const [topPadding, setTopPadding] = useState(0);
  const [bottomPadding, setBottomPadding] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const topElement = document.getElementById(
        `${digimon.evolveTo[0]}-container`
      );
      const bottomElement = document.getElementById(
        `${digimon.evolveTo[digimon.evolveTo.length - 1]}-container`
      );

      if (topElement) {
        setTopPadding(topElement.offsetHeight / 2 - 1.5);
      }

      if (bottomElement) {
        setBottomPadding(bottomElement.offsetHeight / 2 - 2.5);
      }
    }
  }, [topPadding, bottomPadding]);

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

  function verticalConnector() {
    return (
      <svg
        style={{
          margin: 0,
        }}
        height="100%"
        width="20px"
      >
        <polyline
          points="8,0 8,5000"
          style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  function horizontalConnector(alignTo: "left" | "right") {
    return (
      <svg
        style={{
          marginLeft: alignTo === "left" ? "-0.5rem" : "0",
        }}
        height="10px"
        width="1.5rem"
      >
        <polyline
          points="0,5 50,5"
          style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  return (
    <div className={styles.container} id={`${digimon.id}-container`}>
      <div
        className={styles.card}
        style={{ backgroundColor: backgroundColorByLevel(digimon.level) }}
      >
        <div className={styles.connectorContainer}>
          {evolutionChart && digimon.evolveFrom.length > 0 ? (
            horizontalConnector("left")
          ) : (
            <div />
          )}
        </div>
        <div className={styles.imageContainer}>
          <img src={`/${digimon.id}.png`} alt={digimon.name} />
        </div>

        <div className={styles.connectorContainer}>
          {evolutionChart &&
            digimon.evolveTo.length > 0 &&
            horizontalConnector("right")}
        </div>
      </div>
      {evolutionChart && digimon.evolveTo.length > 0 && (
        <div
          style={{
            width: "1rem",
            height: digimon.evolveTo.length > 1 ? "100%" : undefined,
            paddingTop: topPadding,
            paddingBottom: bottomPadding,
          }}
        >
          {digimon.evolveTo.length > 1 && verticalConnector()}
        </div>
      )}
    </div>
  );
}
