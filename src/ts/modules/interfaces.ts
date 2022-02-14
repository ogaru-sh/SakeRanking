export interface Config {
  sakeAPI: {
    baseURL: string;
    basePath: {
      ranking: string;
    };
  };
}

export interface Constant {
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  responsiveTag: {
    cols: number[];
    listWidth: number[];
  };
  drawerWidth: number;
}

export interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

// さけのわRankingAPI
// ---------------------------------------
export interface Area {
  id: number;
  code: number;
  name: string;
  intlName: string;
  key: string;
  default: boolean;
}
export interface Brewery {
  id: number;
  name: string;
  hiragana: string;
  aria: Area;
}

export interface Brand {
  id: number;
  name: string;
  intlName: string;
  hiragana: string;
  key: string;
  nullBrand: boolean;
  brewery: Brewery;
}

export interface FlavorTag {
  id: number;
  tag: string;
}

export interface Media {
  id: number;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHight: number;
  url: string;
  siteName: string;
}

export interface SimilarBrand {
  brand: Brand;
}

export interface Ranking {
  overall: {
    rank: number;
    score: number;
  };
  area: {
    area: Area;
    rank: number;
    score: number;
  };
}

export interface Picture {
  id: number;
  size: {
    width: number;
    height: number;
  };
  url: string;
  smallUrl: string;
  key: string;
}

export interface Statistics {
  checkinCount: number;
}

export interface SimpleFlavorFeature {
  f1: number;
  f2: number;
  f3: number;
  f4: number;
  f5: number;
  f6: number;
}

export interface Kind {
  id: number;
  name: string;
  intlName: string;
  intlDetailedName: string;
}

export interface UserCreatBy {
  id: number;
  name: string;
  iconUrl: string;
  iconKey: string;
  key: string;
  registeredAt: number;
  certified: boolean;
  hasName: boolean;
}

export interface User extends UserCreatBy {
  description: string;
}

export interface Comment {
  id: number;
  checkinTimeComment: boolean;
  text: string;
  commentAt: number;
  checkinKey: string;
  checkin: {
    id: number;
    user: User;
    sake: {
      id: number;
      name: string;
      brand: Brand;
      kind: Kind;
      subKind: Kind[];
      key: string;
    };
    checkedInAt: number;
    key: string;
  };
  user: User;
}

export interface Review {
  id: number;
  title: string;
  text: string;
  brand: Brand;
  createBy: UserCreatBy;
  createdAt: number;
  updatedAt: number;
  key: string;
}

export interface RankingItem {
  id: number;
  yearMonth: string;
  rank: number;
  score: number;
  brandSummary: {
    brand: Brand;
    flaverTags: FlavorTag[];
    media: Media[];
    similarBrands: SimilarBrand[];
    ranking: Ranking;
    statistics: Statistics;
    pictures: Picture[];
    flavorChartUrl: string;
    simpleFlavorFeature: SimpleFlavorFeature;
    comments: Comment[];
    review: Review;
  };
}

export interface SakeRanking {
  ranking: RankingItem[];
  pagination: {
    more: boolean;
  };
}
// ---------------------------------------

export interface RankingViewItem extends RankingItem {
  id: number;
}

// APIが増えた場合、FetchApiResultに追記
export type FetchApiResult = SakeRanking;

export type FetchAPI = (
  path: string,
  query: string
) => Promise<FetchApiResult | null>;

// 画面サイズによって動的に変わる値
export interface ResponsiveItem {
  columns: number;
  listItemWidth: number;
}
