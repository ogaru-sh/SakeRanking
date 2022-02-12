export type CommunityCards = {
  flop1: string;
  flop2: string;
  flop3: string;
  turn: string;
  river: string;
};

export type CommunityStep =
  | ''
  | 'flop1'
  | 'flop2'
  | 'flop3'
  | 'turn'
  | 'river'
  | 'player';

export type HoleCard = string[];

export interface Config {
  sakeAPI: {
    baseURL: string;
    params: {
      areas: string;
      brands: string;
      breweries: string;
      rankings: string;
      flavorCharts: string;
    };
  };
}

export interface ListItem {
  img: string;
  title: string;
  author: string;
}

export interface SakeRanking {
  copyright: string;
  yearMonth: string;
  overall: {
    rank: number;
    score: number;
    brandId: number;
  }[];
  area: {
    areaId: number;
    ranking: {
      rank: number;
      score: number;
      brandId: number;
    }[];
  }[];
}
