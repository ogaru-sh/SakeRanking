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

export interface FetchResult {
  code: string;
  result: SakeRanking;
}
