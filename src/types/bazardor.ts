export interface Category {
    "id": string,
    "slug": string,
    "nameBn": string,
    "icon": string
}

export interface BazarDorMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

export type PriceChangeDirection = "up" | "down" | "flat";

export interface BazarDorProduct {
  id: number;
  slug: string;

  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;

  unit: string;
  image: string;

  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;

  change: {
    dir: PriceChangeDirection;
    pct: number;
  };

  markets: BazarDorMarket[];
}