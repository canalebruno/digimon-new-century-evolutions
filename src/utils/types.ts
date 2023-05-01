export interface Digimon {
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

