import { useEffect, useState } from "react";

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

export default function Card({ digimon }: CardProps) {
  const [topPadding, setTopPadding] = useState(0);
  const [bottomPadding, setBottomPadding] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const topElement = document.getElementById(`${digimon.evolveTo[0]}-card`);
      const bottomElement = document.getElementById(
        `${digimon.evolveTo[digimon.evolveTo.length - 1]}-card`
      );

      console.log(digimon.evolveTo[digimon.evolveTo.length]);

      if (topElement) {
        setTopPadding(topElement.offsetHeight / 2);
      }

      if (bottomElement) {
        setBottomPadding(bottomElement.offsetHeight / 2);
      }
    }
  }, []);

  function backgroundColorByLevel(level: number) {
    switch (level) {
      case 3:
        return "blue";
        break;
      case 4:
        return "red";
        break;
      case 5:
        return "yellow";
        break;
      case 6:
        return "purple";
        break;
      case 7:
        return "gray";
        break;
      default:
        return "white";
    }
  }

  function getHalfCardHeight(id: number) {
    // if (typeof document !== "undefined") {
    const element = document.getElementById(`${id}-card`);

    if (element) {
      console.log(element.offsetHeight / 2);
      return element.offsetHeight / 2;
    }
    // }

    return 0;
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
          points="10,0 10,1000"
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
          margin: 0,
          justifySelf: alignTo === "right" ? "flex-end" : "flex-start",
        }}
        height="10px"
        width="20px"
      >
        <polyline
          points="0,5 20,5"
          style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "1rem 0 " }}>
      <div
        id={`${digimon.id}-card`}
        style={{
          border: "1px solid black",
          padding: "1rem 0",
          backgroundColor: backgroundColorByLevel(digimon.level),
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          width: "10rem",
          height: "100%",
        }}
      >
        {/* {digimon.evolveFrom.length > 0 && <div>{"<"}</div>} */}
        {digimon.evolveFrom.length > 0 ? horizontalConnector("left") : <div />}
        <div>
          <img src={`/${digimon.id}.png`} alt={digimon.name} />
        </div>
        {/* {digimon.evolveTo.length > 0 && <div>{">"}</div>} */}
        {digimon.evolveTo.length > 0 && horizontalConnector("right")}
      </div>
      {digimon.evolveTo.length > 0 && (
        <div
          style={{
            width: "20px",
            height: digimon.evolveTo.length > 1 ? "100%" : undefined,
            paddingTop: topPadding,
            paddingBottom: bottomPadding,
          }}
        >
          {digimon.evolveTo.length === 1
            ? horizontalConnector("left")
            : verticalConnector()}
        </div>
      )}
    </div>
  );
}
